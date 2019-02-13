import React from 'react';

import Backdrop from '../backdrop/Backdrop';

const Modal = ({ show, modalToggle, product }) =>
    show && (
        <>
            <Backdrop onClick={modalToggle} show={show} />
            <div className="modal">
                <h2 className="modal__header">{product.label}</h2>
                <div className="modal__content">{product.longDescription}</div>
                <div className="modal__actions">
                    <button onClick={modalToggle} className="button">
                        Uždaryti
                    </button>
                </div>
            </div>
        </>
    );

export default Modal;
