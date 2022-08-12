//import { useState } from 'react';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './AccountItem.module.scss';

import Image from '~/components/Images';
const cx = classNames.bind(Styles);
function AccountItem({ data, forSidebar = false }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper', { forSidebar })}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('name-account')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </div>
                <p className={cx('title-account')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    forSidebar: PropTypes.bool,
};
export default AccountItem;
