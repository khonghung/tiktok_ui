import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/327962599_559974809377171_6122377607341812156_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZggZGkjoAv4AX98qXT0&_nc_ht=scontent.fhan2-5.fna&oh=00_AfC9Q_BSekK81B6w_yqZUvIXNrAjdFdK_OQTBPAycqykIA&oe=64202BDF" alt="avatar"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>hungkm</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>HUNG</span>
            </div>
        </div>
    );
}

export default AccountItem;