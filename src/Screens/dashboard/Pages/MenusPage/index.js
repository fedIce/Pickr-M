import React from 'react'
import {MenuItem , MenuItemLoading} from '../../Components/MenuItem';
import SearchAndFilterBar from '../../Components/SearchAndFilterBar';
import './style.css'


function MenusPage({openForm, loadMenus, menus}) {

    React.useEffect(() => {
        loadMenus()
    },[loadMenus])

    console.log('MENUS',menus)
    menus = menus.payload 
    return (
        <div className="dash">
            <SearchAndFilterBar />
            
            {
               menus ? menus.map((menu, indx) => (
                    <MenuItem key={menu.id} photoUrl={menu.image_url.lg}  openForm={openForm} data={menu} />
                ))
                : 
                [{},{}].map(() => (
                    <MenuItemLoading />
                ))
              }
        </div>
    ) 
    
}

export default MenusPage
