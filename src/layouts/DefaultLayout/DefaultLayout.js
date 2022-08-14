import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('btn-bottom-container')}>
                <Button rounded text="Get app" className={cx('get-app-btn')} />
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout;
