import React from 'react';
import cls from 'classnames';
import './index.css';

export default ({ className, onClick, name }) => (
    <button
        className={cls("btn u-cursorPointer u-fontSize14", className)}
        onClick={onClick}
        type="button"
    >
        <span>{name}</span>
    </button>
)