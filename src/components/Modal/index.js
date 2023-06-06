import React from 'react';
import './index.css'

function Modal({children,setshwoModal,showModal}) {
    return (
        <>
            <div className='modal-backdrop'>
                <div className='modal'>
                    {children}
                    <button onClick={()=>setshwoModal(showModal!=showModal)}>Close </button>
                </div>
            </div>
        </>
    );
}

export default Modal;