import React from 'react'
import * as Unicon from '@iconscout/react-unicons'

export function RestaurantCard(props) {
    return (
        <div className="card">
            <div className="d-card-header">
                <div className="card-icon">
                    <Unicon.UilUser  className="d-icon" />
                </div>
                <div className="card-title">Deborah Restaurants And Catering</div>
            </div>
            <div className="d-card-body">
                <div className="card-details">
                    <div className="d-card-item">
                        <span id="d-card-desc"> Order In Queue </span>
                        <span id="d-card-val"> 30 </span>
                    </div>
                    <div className="d-card-item">
                        <span id="d-card-desc"> Total Completed Order(s) </span>
                        <span id="d-card-val"> 30k </span>
                    </div>
                    <div className="d-card-item">
                        <span id="d-card-desc"> Total Sales </span>
                        <span id="d-card-val"> $300.54 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

