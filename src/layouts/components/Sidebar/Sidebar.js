import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';
import {
    FollowingIcon,
    HomeIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import MenuUser, { WrapperInSideBar } from './MenuUser';
import DiscoverMenu from './Menu/DiscoverMenu/DiscoverMenu';
import Footer from './Footer';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={routesConfig.home} title="For me" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    to={routesConfig.following}
                    title="Following"
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem to={routesConfig.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <WrapperInSideBar title="Suggested accounts">
                <MenuUser textButton="See all" />
            </WrapperInSideBar>
            <WrapperInSideBar title="Following accounts">
                <MenuUser textButton="See more" following={true} />
            </WrapperInSideBar>
            <WrapperInSideBar title="Discover">
                <div className={cx('discover-menu')}>
                    <DiscoverMenu />
                </div>
            </WrapperInSideBar>
            <Footer />
        </aside>
    );
}

export default Sidebar;
