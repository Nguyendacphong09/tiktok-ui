import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function SearchInput() {
    // state search value
    const [SearchInput, setSearchInput] = useState('');
    // state search result
    const [SearchResult, setSearchResult] = useState([]);
    // ref input
    const refInput = useRef();
    // show result : boolean
    const [ShowResult, setShowResult] = useState(true);
    // state loading
    const [Loading, setLoading] = useState(false);
    // debounce search input
    const debounce = useDebounce(SearchInput, 500);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        //
        const fetchApi = async () => {
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    //handle clear search
    const handleClear = () => {
        setSearchInput('');
        refInput.current.focus();
        setSearchResult([]);
    };
    //handle hide result
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={ShowResult && SearchResult.length > 0}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {SearchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={refInput}
                    value={SearchInput}
                    placeholder="Search accounts and video"
                    spellCheck={false}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!SearchInput && !Loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        {<FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}

                {Loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
            </div>
        </HeadlessTippy>
    );
}

export default SearchInput;
