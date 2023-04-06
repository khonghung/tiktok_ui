import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')} 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680922800&x-signature=S9XkJ1Sqmp%2BoQYZPY3SMYHdPihw%3D"
                alt="img"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>hungkm</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Khổng Mạnh Hùng</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {}

export default AccountItem;