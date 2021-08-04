import React from 'react'
import { Link } from 'react-router-dom'
import { BuisnessListData } from './bussnessListData'

function BuisnessList() {
    return (
        <div className="buissness-list-d">
            <ul>
                {
                    BuisnessListData.map((item, idx) => (
                        <li key={idx}>
                            <Link to={item.path}>
                                <div className="buisness_reg_icon">{item.icon}</div>
                                <div>
                                    <div className="buisness_reg_title">{item.title}</div>
                                    <div className="buisness_reg_desc">{item.desc}</div>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BuisnessList
