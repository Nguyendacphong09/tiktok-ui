import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MenuUser.module.scss';
import AccountItem from '~/components/AccountItem';
import Menu from '~/layouts/components/Sidebar/Menu';
import * as searchServices from '~/services/searchService';
import PopperAccount from '~/components/Popper/PopperAccount/PopperAccount';

const cx = classNames.bind(styles);
function MenuUser({ textButton, following = false }) {
    const [Users, setUsers] = useState([]);
    const [TextButton, setTextButton] = useState(textButton);
    useEffect(() => {
        const fetchApi = async () => {
            let result = [];
            if (following) {
                result = await searchServices.getFollowingUsers();
            } else {
                result = await searchServices.getUsers();
            }
            console.log(result);
            setUsers(result);
        };
        fetchApi();
    }, []);
    const handleClick = () => {
        if (TextButton === textButton) {
            setTextButton('See less');
        } else {
            setTextButton(textButton);
        }
    };
    return (
        <Menu>
            {Users.map((user, index) => (
                <PopperAccount key={index} data={user} disabled={following}>
                    <div className={cx('user')} key={index}>
                        <AccountItem data={user} forSidebar={true} />
                    </div>
                </PopperAccount>
            ))}
            <div>
                <p className={cx('text-btn')} onClick={handleClick}>
                    {TextButton}
                </p>
            </div>
        </Menu>
    );
}
MenuUser.propTypes = {
    textButton: PropTypes.string,
    following: PropTypes.bool,
};

export default MenuUser;
