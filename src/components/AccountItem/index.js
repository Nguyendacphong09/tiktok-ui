import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
const cx = classNames.bind(Styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1659949200&x-signature=Gjg7dX4%2Be5rtMDE%2FNeSTMJ9A7JQ%3D"
                alt=""
            />
            <div className={cx('info')}>
                <div className={cx('name-account')}>
                    <span>hoaa.hanasiii</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <p className={cx('title-account')}>hoa hanasii</p>
            </div>
        </div>
    );
}

export default AccountItem;
