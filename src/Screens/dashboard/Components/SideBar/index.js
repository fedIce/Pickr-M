import React from 'react';
import * as Unicon from '@iconscout/react-unicons'
import { Link, Redirect } from 'react-router-dom';
import { SideBarData, SideBarBottomData } from './SideBarData';
import '../../style.css';

function SideBar( props ) {

    const handleSidebarAction = (item) => {
        if(item.id === 2){
            props.logout();
            return (<Redirect to="/home" />)
        }else{
            props.activeScreen({screen: item.title})
        }
    }

    return (
        <div className="sidebar" id="side_bar">
            <div className="logo_content">
                <div className="logo">
                    {/* Logo */}
                    <img src={process.env.PUBLIC_URL + './logo192.png'}  className="logo_img" alt="logo"/>
                    <div className="logo_name">Pickr</div>
                </div>
                <svg id="menu-bar" width="47" height="26" viewBox="0 0 47 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.598145 0H46.8216C46.8216 2.28445 44.9697 4.13636 42.6852 4.13636H0.598145V0Z" fill="#FF8328"/>
                    <path d="M0.598145 10.9318H36.8921C36.8921 13.2163 35.0402 15.0682 32.7558 15.0682H0.598145V10.9318Z" fill="#2EB374" fillOpacity="0.4"/>
                    <path d="M0.598145 21.8636H46.8216C46.8216 24.1481 44.9697 26 42.6852 26H0.598145V21.8636Z" fill="#FF8328"/>
                </svg>
            </div>
            <ul className="sb_nav_list">
                {
                    SideBarData.map((item, index) => (
                        <li key={index}>
                            <Link onClick={() => props.activeScreen({screen: item.title})} to={item.path}>
                            <i>{item.icon}</i>
                                <span className="links_name">{item.title}</span>
                            </Link>
                            <span className="tooltip">{item.title}</span>
                        </li>
                    ))
                }                
            </ul>
            <div className="lower-menu-items">
                <ul className="sb_nav_list">
                {
                    SideBarBottomData.map((item, index) => (
                        <li key={index}>
                            <Link onClick={() => handleSidebarAction( item )} to={item.path} >
                            <i>{item.icon}</i>
                                <span className="links_name">{item.title}</span>
                            </Link>
                            <span className="tooltip">{item.title}</span>
                        </li>
                    ))
                }     
                </ul>
            </div>
        </div>
        
    )
}

export default SideBar
