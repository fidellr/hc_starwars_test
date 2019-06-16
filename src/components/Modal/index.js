import React from 'react';
import './index.css'

const ModalHeader = ({ title, onClickClose }) => (
    <div className="modalHeader u-textAlignCenter">
        <h2>{title}</h2>
        <div className="btn-close closeModal u-cursorPointer" aria-hidden="true" onClick={() => onClickClose(null)}>&times;</div>
    </div>
);
const ModalBody = ({ children }) => (
    <div className="modalBody">
        {children}
    </div>
);
const ModalFooter = ({ children }) => (
    <div className="modalFooter">
        <div className="modalBtn" id="btn_ingresar">Login</div>
        {children}
    </div>
);

export default ({ children }) => (
    <div className="modalContainer">
        <div className="modal opened" aria-hidden="true">
            <div className="modalDialog">
                {children}
            </div>
        </div>
    </div>
);

export {
    ModalHeader,
    ModalBody,
    ModalFooter,
}