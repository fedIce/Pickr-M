import React from 'react'
import * as Unicon from '@iconscout/react-unicons';
import Tags from '../../../../Components/Tags';
import OpenDaysComponent from '../../../../Components/OpenDaysComponent';
import MenuItemsComponent from './MenuItemsComponent';
import Modal from '../Modal';

export default function MenuForm( { openSubForm, data }) {
    const [addOpenDays, setAddOpenDays] = React.useState(false);
    const [ menudata, setMenuData ] = React.useState({})

    React.useEffect(() => {
        setMenuData(data)
        console.log('____', data)

        return () => {
            setMenuData({})
        }
    },[data, menudata])

    return (
        <div className="menu-form-container">
            <div className="menu-form-header">Menu Details </div>
            <div id="seperator"></div>
            <div className="menu-form-items-container">
                <div className="menu-form-item">
                    <div id="header">
                        <span id="title">Title</span> 
                        <Unicon.UilPen id="icon"/>
                    </div>
                    <input type="text" onFocus={() => null} value={menudata?.title?.translations.en_us} placeholder="Menu Title" name="title" />
                </div>
                <div className="menu-form-item">
                    <div id="header">
                        <span id="title">Description</span> 
                        <Unicon.UilPen id="icon"/>
                    </div>
                    <textarea rows={5} value={menudata?.description?.translations.en_us} onFocus={() => null} placeholder="Describe your menu" name="title" />
                </div>
                <div className="menu-form-item">
                    <div id="header">
                        <span id="title">Category</span> 
                        <Unicon.UilPen id="icon"/>
                    </div>
                    <Tags _tags={menudata.category_ids? menudata.category_ids : []} />
                </div>

                <div className="menu-form-item">
                    <div id="header">
                        <span id="title">Open Days</span> 
                        <Unicon.UilPlus id="icon" onClick={() => setAddOpenDays(!addOpenDays)} />
                    </div>
                    <OpenDaysComponent openForm={addOpenDays} setOpenForm={setAddOpenDays} />
                </div>


                <div className="menu-form-item">
                    <div id="header">
                        <span id="title">Menu Items</span> 
                        <Unicon.UilPlus id="icon" onClick={() => openSubForm()}/>
                    </div>
                    <MenuItemsComponent openSubForm={openSubForm} />
                </div>

               

            </div>
            <div className="empty-space"></div>
        </div>
    )
}
