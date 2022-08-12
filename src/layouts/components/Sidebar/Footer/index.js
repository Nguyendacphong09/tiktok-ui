import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { WrapperInSideBar } from '~/layouts/components/Sidebar/MenuUser';

const cx = classNames.bind(styles);
const links1 = ['About', 'TikTok Browse', 'Newsroom', 'Contact', 'Careers'];
const links2 = ['TikTok for Good', 'Advertise', 'Developers', 'Transparency'];
const links3 = ['Help', 'Safety', 'Terms', 'Privacy', 'Creator', 'Portal'];

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <WrapperInSideBar>
                <div className={cx('inline-link')}>
                    {links1.map((link, index) => (
                        <a href="/" alt="" key={index}>
                            {link}
                        </a>
                    ))}
                </div>
                <a href="/" alt="">
                    ByteDance
                </a>
                <div className={cx('inline-link')}>
                    {links2.map((link, index) => (
                        <a href="/" alt="" key={index + 6}>
                            {link}
                        </a>
                    ))}
                </div>
                <a href="/" alt="">
                    TikTok Rewards
                </a>
                <div className={cx('inline-link')}>
                    {links3.map((link, index) => (
                        <a href="/" alt="" key={index + 12}>
                            {link}
                        </a>
                    ))}
                </div>
                <a href="/" alt="">
                    Community Guidelines
                </a>
                <div className={cx('footer-describe')}>© 2022 TikTok</div>
            </WrapperInSideBar>
        </footer>
    );
}

export default Footer;
