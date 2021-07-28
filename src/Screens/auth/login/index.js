import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../store/actions/UserActions/action-creators';
import '../style.css'
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const LoginComponent = ( props ) => {

    const [ email, setEmail ] = React.useState("")
    const [ password, setPassword ] = React.useState("")


    React.useEffect(() => {

    },[])

    const getEmail = (e) => {
        const email = e.target
        // Validate Email
        setEmail(validator(email.value, email.name))
    }

    const getPassword = (e) => {
        const password = e.target
        // Validate Password
        setPassword(validator(password.value, password.name))
    }

    const validator = ( data, type ) => {

        if (type === "email"){
            return data
        }
        if (type === "password"){
            return data
        }
    }

    const handleLogin = (e) => {
        const contraband = [null, "", undefined]
        console.log(email, password)
        !contraband.includes(email) && !contraband.includes(password) ? props.login(email, password) : alert(" Design Error Component to handle this error ")
        e.preventDefault()
    }



    return (
        <div className="container login-container">
            {/* -------------- Container ----------------- */}
            <div className="contents">

                <div className="left">
                    <div className="left-container">
                        <div className="left-title section">
                            Reprehenderit et mollit excepteur labore ipsum magna tempor dolore ut aute. 
                        </div>
                        <div className="left-subtitle subsection">
                            Reprehenderit et mollit excepteur labore ipsum magna tempor dolore ut aute. Labore consequat irure duis sit minim nulla sunt ullamco esse et duis cillum.
                            </div>
                        <div className="left-subtitle subsection">
                            Reprehenderit et mollit excepteur labore ipsum magna tempor dolore ut aute. Labore consequat irure duis sit minim nulla sunt ullamco esse et duis cillum. 
                            </div>
                    </div>
                </div>

                <div className="right">
                    <div className="right-container container" >
                        <div className="image-section section">
                            <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'}  alt="profile" className="profile" />
                        </div>
                        <div className="form-section section">

                            {/* ------------- Form ----------- */}
                            <form className="login-form">

                                <div className="form-data"> 
                                    <label>Email</label>
                                    <input onChange={(event) => getEmail(event)} name="email" type="email"  className="input-email" />
                                </div>

                                <div className="form-data"> 
                                    <label>Password</label>
                                    <input onChange={(event) => getPassword(event)} name="password" type="password" className="input-password" />
                                </div>

                                <div className="form-data" > 
                                    <button disabled={props.user === 'LOADING'} onClick={handleLogin} type="submit" className="input-submit" >
                                        { props.user === 'LOADING'? "LOADING" : "SIGN IN" }
                                    </button>
                                </div>

                                <div className="form-data or-section"> 
                                    <div></div>
                                    <div>or</div>
                                    <div></div>
                                </div>
                                <div className="form-actns auth-section"> 
                                    <button className="auth-btns">
                                        <Unicons.UilGoogle className="auth_icon"/>
                                    </button>
                                    <button className="auth-btns">
                                        <Unicons.UilFacebook className="auth_icon"/>
                                    </button>
                                </div>

                                <div className="signup-section"> 
                                    <Link to="#" className="signup-link">
                                        create a new <span> Pickr Buisness Account </span>
                                    </Link>
                                </div>

                            </form>
                            {/* ----------- Form End ----------- */}
                        </div>
                        <div className="action-section section"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    console.log(state.user.data)
    return {
        user: state.user.data
    } 
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        login: (email, password) => dispatch(loginUser({ email: email, password: password}))
    } 
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginComponent)
