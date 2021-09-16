import React from 'react'
import * as Unicon from '@iconscout/react-unicons'

function MenuItemsComponent({openSubForm}) {
    return (
        <div className="menu-items-component-container">
            <ul>
                <li className="non-optional-menu">
                    <div>
                        <span>Chiken <Unicon.UilPen id="menu-item-component-edit-icon"  onClick={() => openSubForm()} /></span>
                        <span>Beef</span>
                        <span>Fish</span>
                        <span>$ 23.50</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Rice And Stew <Unicon.UilPen id="menu-item-component-edit-icon"  onClick={() => openSubForm()} /></span>
                        <span>$ 23.50</span>
                    </div>
                </li>
                <li className="optional-menu">
                    <div>
                        <span>Coca Cola <Unicon.UilPen id="menu-item-component-edit-icon" onClick={() => openSubForm()} /></span>
                        <span>Water</span>
                        <span>$ 23.50</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MenuItemsComponent
