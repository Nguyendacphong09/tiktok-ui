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

export default Button;
