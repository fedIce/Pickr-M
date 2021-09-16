import React from 'react'
import * as Unicon from '@iconscout/react-unicons';
import './style.css'

const SearchAndFilterBar = () => {
    return (
        <div className="search-filter-bar-container">
            <div id="search-bar">
                <Unicon.UilSearch />
                <input type="text" name="search-bar" placeholder="search..." />
            </div>
            <div id="filter-bar">
                <input type="text" name="filter-bar" placeholder="filter" />
                <Unicon.UilFilter  />
            </div>
        </div>
    )
}

export default SearchAndFilterBar
