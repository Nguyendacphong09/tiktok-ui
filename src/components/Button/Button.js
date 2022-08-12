import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';
const cx = classNames.bind(Styles);
function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    medium = false,
    rounded = false,
    sidebarBtn = false,
    text = '',
    leftIcon,
    small,
    large,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        medium,
        sidebarBtn,
        text,
        leftIcon,
        [className]: className,
        rounded,
        small,
        large,
    });
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (props.href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            {text && <span className={cx('text-button')}>{text}</span>}
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    medium: PropTypes.bool,
    sidebarBtn: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
