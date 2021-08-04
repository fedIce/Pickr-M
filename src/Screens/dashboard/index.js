import React from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import BuisnessList from './Components/BuisnessList'
import Modal from './Components/Modal';
import DashboardPage from './Pages/DashboardPage';
import {UilPlus} from '@iconscout/react-unicons'
import './style.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/UserActions/action-types';
import { logout } from '../../store/actions/UserActions/action-creators'
import { Redirect, withRouter } from 'react-router-dom';

const Dashboard = (props) => {
    const [visible, setVisible] = React.useState(false)
    const [user, setUser] = React.useState({})


    React.useEffect(() => {
        if (!props.user) return <Redirect to="/home" />
        setUser(props.user)
    }, [props])

    const toggleVisible =()=>{
        setVisible(!visible)
    }
    return (
        <div>
            <Header user={user} />
            <div className="side-bar">
                <SideBar logout={props.logout} />
                <div className="dashboard-main-content">
                    <DashboardPage />
                </div>
                <Modal visible={visible} transparent={true} toggleVisible={() => toggleVisible}>
                    <div className="buisness-lst">
                        <BuisnessList />
                    </div>
                </Modal>
            </div>
            <button onClick={toggleVisible} className="d-add">
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
