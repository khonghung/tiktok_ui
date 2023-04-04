import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBitcoinSign,
    faCircleQuestion,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faSignOut,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Search from '~/components/Layouts/components/Search';
import { PlusIcon } from '~/components/Icons';
import image from '~/assets/images';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'languages',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard'
    },
];

function Header() {

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.title) {
            case 'feedback':
                // logic handle
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hungkm',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}><img src={image.logo} alt='Logo Tiktok' /></Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Button text leftIcon={<PlusIcon />}>Upload</Button>
                        </div>
                    ) : (
                        <>
                            <Button text leftIcon={<PlusIcon />}>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                                alt='HungKM'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header >
    );
}

export default Header;