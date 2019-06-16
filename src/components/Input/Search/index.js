import React from 'react';
import cls from 'classnames';
import { findItemByKeyword } from '../../../utils/helpers/search';
import './index.css';

export default ({ className, keyToSearch, data, onChange, placeholder }) => {
    const searchItemInData = (e) => {
        const { value } = e.target;
        const res = findItemByKeyword(keyToSearch, data, value);
        onChange(value, res);
    }

    return (
        <div className="searchInputContainer">
            <input type="text" className={cls('searchInput u-outlineNone u-borderRadius10', className)} onChange={searchItemInData} placeholder={placeholder} />
        </div>
    );
};
