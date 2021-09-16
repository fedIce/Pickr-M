import React, { Component } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import './style.css'

export default class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        console.log(props.user)
    }
    render() {
        return (
            <div className="profile-component-container">
                <Unicons.UilAngleDown />
                <span> {this.props.user? this.props.user.display_name : (<div className="skeleton text-loading"></div>)} </span>
                {this.props.user? <img src={this.props.user.photo_url} className="user-profile" alt="profile" />: (<div className="skeleton circle-loading"></div>)}
            </div>
        )
    }
}
