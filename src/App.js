import * as React from 'react';
import Header from './Components/Header'
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux'
import Dashboard from './Screens/dashboard' 
import LoginComponent from './Screens/auth/login'
import SignUpComponent from './Screens/auth/signup'
import PhoneComponent from './Screens/auth/signup/phone'
import PhoneVerifyComponent from './Screens/auth/signup/phone_verify'
import HomeComponent from './Screens/Home';
// import { auth } from './assets/fireconfig'
import { validateToken } from './assets/utils/token';
import { SIGNOUT } from './store/actions/UserActions/action-types';


const RootApp = (props) => {

   return (
        <div className="container">
                <Header />
                <div className="main-container">
                <Switch>
                    <Route path="/home" component={HomeComponent} />
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/signup" component={SignUpComponent} />
                    <Route path="/verify_number" component={PhoneVerifyComponent} />
                    <Route path="/phone" component={PhoneComponent} />
                </Switch>
                </div>
        </div>
    )
}

const App = (props) => {
    // myite@ourearth.com
    // S3cr3tp4sswo4rd@
    const [loggedInStatus, setLoggedInStatus] = React.useState(true);
    const contraband = ['LOADING', 'access_token', null, undefined]

    React.useEffect(() => {
        // props.nullify()
        if(props.user?.access_token){
            props.refresh(props.user?.access_token)
            setLoggedInStatus(props.user != null && props.user !== undefined)        
        }
    }, [props])

    return (
        <>
        {
            !contraband.includes(props.user)? <Redirect to="/dashboard" /> : <Redirect to="/home" />
        }
        <Switch>
            <Route path="/" exact={!contraband.includes(props.user)}  render={ prop => (
                <RootApp {...props} loggedInStatus={loggedInStatus} />
            )} />
            
            <Route path="/dashboard" render={ prop => (
                <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )} />
        </Switch>
    </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        user: state.user.data
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        refresh: (token) => dispatch(validateToken(token)),
        nullify: () => dispatch({
            type: SIGNOUT,
            payload: null,
            error:null

        })
    }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

