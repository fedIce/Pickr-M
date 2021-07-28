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
                <span> {this.props.user.display_name} </span>
                <img src={this.props.user.photo_url} className="user-profile" alt="profile" />
            </div>
        )
    }
}
