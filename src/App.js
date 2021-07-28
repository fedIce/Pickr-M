import * as React from 'react';
import Header from './Components/Header'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux'
import Dashboard from './Screens/dashboard' 
import LoginComponent from './Screens/auth/login'
import SignUpComponent from './Screens/auth/signup'
import PhoneComponent from './Screens/auth/signup/phone'
import PhoneVerifyComponent from './Screens/auth/signup/phone_verify'
import HomeComponent from './Screens/Home';


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

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedInStatus: false,
            user: {}
        }
    }
    // myite@ourearth.com
    // S3cr3tp4sswo4rd@
    componentDidMount(){
        if(this.props.user){
            this.setState({
                user: this.props.user,
                loggedInStatus: this.props.user.loggedIn //Temp Switch LoggedIn State
            })
        }
    }

    render(){
        return (
            <>
            <Switch>
                {
                    this.state.loggedInStatus?
                    <>
                        <Route path="/dashboard" render={props => (
                            <Dashboard {...this.state} loggedInStatus={this.state.loggedInStatus} />
                        )} />
                        <Route component={() => <Redirect to="/dashboard" />} />
                    </>
                    :
                    <>
                        <Route exact={this.state.loggedInStatus} path="/" render={props => (
                            <RootApp {...props} loggedInStatus={this.state.loggedInStatus} />
                        )} />
                        <Route component={() => <Redirect to="/home" />} />

                    </>
                }
            </Switch>
            </>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log(state.user.data)
    return {
        user: state.user.data
    } 
}




export default connect(mapStateToProps, null)(App)

