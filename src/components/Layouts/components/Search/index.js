import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then(res => res.json())
        .then(res => {
            setSearchResult(res.data);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search'
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClick={() => { setShowResult(true) }}
                />
                {!!searchValue && !loading && ( 
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;