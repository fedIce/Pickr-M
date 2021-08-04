import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'


function Modal({ visible = false, transparent = false, children, toggleVisible }) {
    
   return (
        <div className="modal" style={{
            backgroundColor: `${transparent? 'rgba(0,0,0,0)' : "#fff"}`,
            display: `${visible? 'flex': 'none'}`
            }}>
            <UilTimes className="close-modal"  onClick={toggleVisible()} />
            { children }
        </div>
    )
}

export default Modal
