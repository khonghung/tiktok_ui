import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeActiveIcon, FollowingIcon, FollowingActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
                <MenuItem title='Following' to={config.routes.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon />}/>
                <MenuItem title='Live' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;