import React from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import BuisnessList from './Components/BuisnessList'
import Modal from './Components/Modal';
import AnalysticsPage from './Pages/AnalysticsPage';
import MenusPage from './Pages/MenusPage';
import ChatsPage from './Pages/ChatsPage';
import OrdersPage from './Pages/OrdersPage';
import PaymentsPage from './Pages/PaymentsPage';
import SettingsPage from './Pages/SettingsPage';
import {UilPlus, UilAngleLeft, UilAngleDown } from '@iconscout/react-unicons'
import { UisAngleRightB } from '@iconscout/react-unicons-solid'
import './style.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/UserActions/action-types';
import { logout } from '../../store/actions/UserActions/action-creators'
import { Redirect, withRouter } from 'react-router-dom';
import MenuForm from './Components/MenuComponents/MenuForm';
import { waitFor } from '@testing-library/react';
import MenuListing from './Components/MenuListing';

const Dashboard = (props) => {
    const [visible, setVisible] = React.useState(false)
    const [activeScreen, setActiveScreen ] = React.useState({ screen: 'Analytics'})
    const [user, setUser] = React.useState({})
    const [formTranslate, setFormTranslate] = React.useState(0);
    const [subFormTranslate, setSubFormTranslate] = React.useState(100);
    const [openSubFoem, setOpenSubForm] = React.useState(false);
    const [showSubForm, setShowSubForm] = React.useState(true)

    const [menuFormData, setMenuFormData] = React.useState({})



    React.useEffect(() => {
        if (!props.user) return <Redirect to="/home" />
        setUser(props.user)
        console.log(props.menus)

    }, [props, menuFormData])

    const toggleVisible =()=>{
        setVisible(!visible)
    }

    const toggleSubFormVisible = () => {

        switch(subFormTranslate){
            case 0:
                    setSubFormTranslate(100);
                    setTimeout(() => setOpenSubForm(!openSubFoem), 700)
                return
            case 100:
                setOpenSubForm(!openSubFoem)
                setTimeout(() => setSubFormTranslate(0), 700)
                return
            default:
                return null
        }
    }

     const toggleFormVisible =( data = null )=>{
         toggleVisible()
        switch(formTranslate){
            case 0:
                setFormTranslate(93);
                break
            case 93:
                setFormTranslate(0);
                break
            default:
                break
        }

        if (data) {
            setMenuFormData(data)
            console.log('MENu DATA: ', data)
            return data
        }
       
    }
    return (
        <div style={{ width: '100%', overflowX:'hidden'}}>
            <Header user={user} />
            <div className="side-bar">
                <SideBar logout={props.logout} activeScreen={setActiveScreen} />
                <div className="dashboard-main-content">
                    {
                        activeScreen.screen === 'Analytics'?
                        <AnalysticsPage {...props} />
                        :activeScreen.screen === 'Menus'?
                        <MenusPage openForm={toggleFormVisible} {...props} /> 
                        :activeScreen.screen === 'Settings'?
                        <SettingsPage />
                        :activeScreen.screen === 'Payments'?
                        <PaymentsPage />
                        :activeScreen.screen === 'Orders'?
                        <OrdersPage />
                        :activeScreen.screen === 'Chats'?
                        <ChatsPage />
                        :null
                    }
                </div>
                {/* <Modal visible={visible} transparent={true} toggleVisible={() => toggleVisible}> */}
                    <div className="menu-form" style={{ width: `${formTranslate}%`, display: !formTranslate === 0? 'none': 'flex'}}>
                        <div style={{ display: 'flex', flexDirection:'column', width: '100%'}}>
                            <div id="menu-form-header"><UilAngleLeft className="d-icon"  onClick={() => toggleFormVisible()} /></div>
                            <MenuForm openSubForm={toggleSubFormVisible} data={menuFormData} />
                        </div>
                            <div className="menu-form-modal" style={{display: openSubFoem? 'flex': 'none'}}>
                                <div id="menu-details-form" style={{transform: `translateY(${subFormTranslate}%)`}}>
                                    <div id="mf-header" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding: '20px'}}><div style={{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>Menu <UisAngleRightB/> Menu Listing <UisAngleRightB /> Edit Menu Listing </div> <UilAngleDown className="d-icon"  onClick={() => toggleSubFormVisible()} /></div>
                                    <MenuListing />
                                </div>
                            </div>

                    </div>
                {/* </Modal> */}
            </div>
            <button onClick={() => toggleFormVisible(null)}  className="d-add">
                <UilPlus  className="d-add-icon" id="d-add-icon"/>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {  
    return {
        logout: () => dispatch(logout())
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard))
