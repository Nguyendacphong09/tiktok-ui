import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);
function SearchInput() {
    // state search value
    const [SearchValue, setSearchValue] = useState('');
    // state search result
    const [SearchResult, setSearchResult] = useState([]);
    // ref input
    const refInput = useRef();
    // show result : boolean
    const [ShowResult, setShowResult] = useState(false);
    // state loading
    const [Loading, setLoading] = useState(false);
    // debounceValue search input
    const debounceValue = useDebounce(SearchValue, 500);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        //
        const fetchApi = async () => {
            const result = await searchServices.search(debounceValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);
    //handle clear search
    const handleClear = () => {
        setSearchValue('');
        refInput.current.focus();
        setSearchResult([]);
    };
    //handle hide result
    const handleHideResult = () => {
        setShowResult(false);
    };
    //Handle change input
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        //Using a wrapper <div> tag around the reference element
        //solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
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
                        value={SearchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!SearchValue && !Loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            {<FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    )}

                    {Loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <Link to={config.routes.search}>
                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            {<SearchIcon />}
                        </button>
                    </Link>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchInput;
