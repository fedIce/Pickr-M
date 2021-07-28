import React from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

const Dashboard = (props) => {
    return (
        <div>
            <Header user={props.user} />
            <div className="side-bar">
                <SideBar />
            </div>
        </div>
    )
}

export default Dashboard
