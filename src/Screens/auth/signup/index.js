import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../store/actions/UserActions/action-creators';
import '../style.css'
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { Redirect }  from 'react-router-dom'

const SignUpComponent = ( props ) => {

    const [ email, setEmail ] = React.useState("")
    const [ password, setPassword ] = React.useState("")
    const [ name, setName ] = React.useState("")


    React.useEffect(() => {

    },[])

    const getEmail = (e) => {
        const email = e.target
        // Validate Email
        setEmail(validator(email.value, email.name))
    }

    const getfullName = (e) => {
        const name  = e.target

        setName(validator(name.value, name.name))
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

    const handleSignup = (e) => {
        const contraband = [null, "", undefined]
        console.log(email, password)
        e.preventDefault()

        // return (<Redirect to="/phone" />)

        return !contraband.includes(email) && !contraband.includes(password) && !contraband.includes(name) ? null : alert(" Design Error Component to handle this error ")
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

                        <div className="form-section section">

                            {/* ------------- Form ----------- */}
                            <form className="login-form">

                                <div className="form-data"> 
                                    <label>Fullname</label>
                                    <input onChange={(event) => getfullName(event)} name="name" type="text"  className="input-email" />
                                </div>

                                <div className="form-data"> 
                                    <label>Email</label>
                                    <input onChange={(event) => getEmail(event)} name="email" type="email"  className="input-email" />
                                </div>

                                <div className="form-data"> 
                                    <label>Password</label>
                                    <input onChange={(event) => getPassword(event)} name="password" type="password" className="input-password" />
                                </div>

                                <div className="form-data" style={{
                                    marginTop: 40
                                }} > 
                                    <button disabled={props.user === 'LOADING'} onClick={handleSignup} type="submit" className="input-submit" >
                                        { props.user === 'LOADING'? "LOADING" : "SIGN UP" }
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
                                    <Link to="/phone" className="signup-link">
                                        Log In to your <span> Pickr Buisness Account </span>
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

export default connect( mapStateToProps, mapDispatchToProps )(SignUpComponent)
