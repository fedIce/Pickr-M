import * as React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { connect } from 'react-redux';
import { changeTheme } from '../../../../store/actions/UserActions/action-creators';
import * as ThemeActionTypes from '../../../../store/actions/UserActions/action-types';
import UserProfile from '../Profile'
import { Link } from 'react-router-dom'



const Header = (props) => {//#region 

    const [ theme, setTheme ] = React.useState({})

    React.useEffect(() => {
        setTheme(props.theme.activeTheme)
        props.theme.activeTheme === ThemeActionTypes.DARK? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
        console.log(props.theme)
    },[props.theme])

    const toggleTheme = () => {
        props.toggleTheme(theme)
    }

    return (
        <header className="header dashboard-header" id="header">
            <nav className="nav container">

                <div className="nav_menu" id="nav_menu">
                    <ul className="nav_list grid">
                        <UserProfile user={props.user} />
                    </ul>

                    <Unicons.UilTimes className="nav_close" id="nav_close" /> 
                </div>
                {/* Theme change button */}
                {
                    props.theme.activeTheme === ThemeActionTypes.DARK?
                    <button onClick={() => toggleTheme()} className="iconBtn"><Unicons.UilSun className="change_theme" id="theme_button" /></button>
                    :
                    <button onClick={() => toggleTheme()} className="iconBtn"><Unicons.UilMoon className="change_theme" id="theme_button" /></button>
                }

                <div className="nav_btns">
                    <div className="nav_toggle" id="nav-toggle">
                        <Unicons.UilApps />
                    </div>
                </div>
            </nav>
        </header>
    )
}//#endregion

const mapStateToProps = ( state ) => {
    console.log('STATE: ', state.user)
    return {
        theme: state.theme
    } 
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        toggleTheme: ( currentTheme ) => dispatch(changeTheme( currentTheme ))
    } 
}

export default connect( mapStateToProps, mapDispatchToProps )(Header)