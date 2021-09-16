import React from 'react';
import './style.css'
import Switch from '../../../../Components/Switch'
import * as Unicon from '@iconscout/react-unicons'
import ActionButtonRound from '../../../../Components/ActionBtnRound';
import StarRating from '../../../../Components/StarRating'

export const MenuItem = ({photoUrl, openForm, data}) => {
     const [menuActiveState, setMenuActiveState] = React.useState(false)
     
     React.useEffect(() => {
         setMenuActiveState(data.available)
     }, [data])

    return (
        <div className="menuitem-component-container">
           <div className="menuitem-img-container">
               <img src={photoUrl} alt=""  className="menuitem-img" />
               <div className="menuitem-img-details">
                   <span id="title">{data.title.translations.en_us}</span>
                   <span id="sold"> <Unicon.UilChart style={{marginRight: '5px'}} /> <b style={{ fontWeight: '400', paddingRight: '5px' }}>{data.statistics.sold} </b> total sold</span>
                   <span id="rating"><StarRating rate={data.statistics.rating} style={{marginRight: '10px'}} /> <i>  ({data.statistics.rating} rating)</i></span>
               </div>
           </div>
           <div className="menuitem-desc-container">
                <div className="mi-d-mis" style={{ transition: 'all 0.3s ease', color: menuActiveState? '#2eb374' : '#e3e3e3'}}>{menuActiveState? 'active' : 'disabled'}</div>
                <div id="mi-d-text">
                    {data.description.translations.en_us}
                </div>
               <div id="mi-d-cat">
                   <span className="mi-d-cat-title">Categories > </span>
                   <span className="mi-d-cat-items">
                       {
                           data.category_ids.map((category, indx) => (
                               <span key={indx}>{category}</span>
                           ))
                       }
                   </span>
               </div>
           </div>
           <div className="menuitem-action-container">
               <Switch  activeState={menuActiveState? true : false} setActiveState={setMenuActiveState}/>
                <div className="p-round-btn" onClick={() => openForm(data)}>
                    <ActionButtonRound icon={<Unicon.UilEdit />}   />
                </div>
                <div className="p-round-btn" onClick={() => openForm(data)}>
                    <ActionButtonRound icon={<Unicon.UilListUl  />} clickAction={null} />
                </div>
                <div className="p-round-btn" onClick={() => openForm(data)}>
                    <ActionButtonRound icon={<Unicon.UilTrash  />} clickAction={null} />
                </div>

           </div>
        </div>
    )

}


export const MenuItemLoading = () => {
   return (
       <div className="menuitem-component-container-loading">
          <div id="menu-image-loading" className="skeleton"></div>
          <div id="menu-desc-loading">
              <span id="loading-description" className="skeleton"></span>
              <span id="loading-description" className="skeleton" style={{ width: '85%'}}></span>
              <span id="loading-description" className="skeleton" style={{ width: '80%'}}></span>
              <span id="menu-cat-loading">
                    <span className="loading-text skeleton"></span>
                    <span className="loading-text skeleton"></span>
                    <span className="loading-text skeleton"></span>
              </span>
          </div>
       </div>
   )

}

