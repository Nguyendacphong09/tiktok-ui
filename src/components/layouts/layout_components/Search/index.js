import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import routesConfig from '~/config/routes';

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
    //Handle change input
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchInput(searchValue);
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
                        value={SearchInput}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!SearchInput && !Loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            {<FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    )}

                    {Loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <Link to={routesConfig.search}>
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
