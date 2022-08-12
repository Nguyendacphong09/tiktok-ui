import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Images';
import styles from './PopperAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
const cx = classNames.bind(styles);
function PopperAccount({ children, data }) {
    return (
        <Tippy
            placement="bottom-start"
            interactive
            render={(attrs) => (
                <PopperWrapper className={cx('wrapper')}>
                    <div tabIndex="-1" {...attrs}>
                        <div className={cx('header')}>
                            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                            <Button primary text="Follow" className={cx('follow-btn')} />
                        </div>
                        <div className={cx('link-profile')}>
                            <a href={`/@${data.nickname}`} target="_bank">
                                {data.full_name}
                                {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                            </a>
                        </div>
                        <a href={`/@${data.nickname}`} target="_bank">
                            <span className={cx('nickname')}>{data.nickname}</span>
                        </a>
                        <div className={cx('interactive')}>
                            <span className={cx('amount')}>11M</span>
                            <span className={cx('interactive-type')}>Follower</span>
                            <span className={cx('amount')}>15M</span>
                            <span className={cx('interactive-type')}>Likes</span>
                        </div>
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default PopperAccount;
