
import React from 'react';
import { connect } from 'react-redux';
import { UilCheckCircle, UilTimesCircle  } from '@iconscout/react-unicons';
import './style.css';

export const Badge = ({ message, status, header=null }) => {
    if(status === 'error'){
        return (
            <div className="badge">
                <UilTimesCircle className="x-badge_icon" />
                <div> {message} </div>
            </div>
        )
    }

    if(status === 'notice'){
        return (
            <div className="badge">
                <UilCheckCircle className="badge_icon" />
                <div> {message} </div>
            </div>
        )
    }

    if(status === 'multiline-error'){
        return (
            <div className="badge">
                <UilTimesCircle className="x-badge_icon" />
                <div className="multiline-badge-info">
                    <div className="multiline-badge-header">{header}</div>
                    <div className="multiline-badge-text"> {message} </div>
                </div>
            </div>
        )
    }

    if(status === 'multiline-notice'){
        return (
            <div className="badge">
                <UilTimesCircle className="badge_icon" />
                <div className="multiline-badge-info">
                    <div className="multiline-badge-header">{header}</div>
                    <div className="multiline-badge-text"> {message} </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Badge)
