import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faKeyboard, faUser, faBitcoinSign, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import config from '~/config';
import Button from '~/components/Button';
import styles from '../Header/Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { EllipsisVIcon, InboxIcon, MessageIcon, PlusIcon } from '~/components/Icons';
import Image from '~/components/Images';
import SearchInput from '~/layouts/components/Search';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header({ short, long }) {
    // user fake
    const currentUser = true;
    //Menu data
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const currentMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoarasiii',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Get Coin',
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
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];
    //Handle onChange Menu
    const handleOnChangeMenu = (MenuItem) => {
        console.log(MenuItem);
    };
    //
    const classes = cx('inner', { short, long });
    return (
        <header className={cx('wrapper')}>
            <div className={classes}>
                <NavLink to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logoTiktok} alt="tik-tok-logo" />
                    </div>
                </NavLink>

                <SearchInput />
                <div className={cx('actions')}>
                    <NavLink to={config.routes.upload}>
                        <Button medium leftIcon={<PlusIcon />} text="Upload" />
                    </NavLink>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <NavLink to={config.routes.message}>
                                    <button className={cx('actions-icon-login')}>
                                        <MessageIcon />
                                    </button>
                                </NavLink>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('actions-icon-login')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className={cx('sign-in-btn')}>
                                <Button primary text="Log in" />
                            </div>
                        </>
                    )}
                    <Menu items={currentUser ? currentMenu : MENU_ITEMS} onChange={handleOnChangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660579200&x-signature=%2FG40h79kTMHoHBgK9gmdV44Eqjo%3D"
                                alt="harasii"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisVIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
