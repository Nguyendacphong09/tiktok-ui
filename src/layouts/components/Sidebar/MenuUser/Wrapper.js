import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MenuUser.module.scss';
const cx = classNames.bind(styles);
function Wrapper({ children, title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('menu-title')}>{title}</p>
            {children}
        </div>
    );
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};
export default Wrapper;
