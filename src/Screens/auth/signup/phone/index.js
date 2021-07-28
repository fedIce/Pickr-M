import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../../store/actions/UserActions/action-creators';
import '../../style.css'

const PhoneComponent = ( props ) => {

    const [ phone, setPhone ] = React.useState("")


    React.useEffect(() => {

    },[])

    const getPhone = (e) => {
        const phone = e.target
        // Validate Email
        setPhone(validator(phone.value, phone.name))
    }

  

    const validator = ( data, type ) => {

        if (type === "phone"){
            return data
        }
    }

    const handlePhone = (e) => {
        const contraband = [null, "", undefined]

        console.log(`Phone Number:`, phone, contraband)

        e.preventDefault()
    }



    return (
        <div className="container small-container">
            {/* -------------- Container ----------------- */}
            <div className="contents small-contents" >
                <div className="right">
                    <div className="right-container container" >
                        <div className="form-section section">

                            {/* ------------- Form ----------- */}
                            <form className="login-form">

                                <div className="phone-msg-section"> 
                                        Add Your Phone Number, Pickr will send you a verification code to authenticate your login
                                </div>
                                
                                <div className="form-data"> 
                                    <label>Phone</label>
                                    
                                    <input onChange={(event) => getPhone(event)} name="phone" type="phone"  className="input-phone"  />
                                </div>

                                <div className="form-data" > 
                                    <button disabled={props.user === 'LOADING'} onClick={handlePhone} type="submit" className="input-submit" >
                                        <Link to="/verify_number" > Go to Verify</Link>
                                        { props.user === 'LOADING'? "LOADING" : "SUBMIT" }
                                    </button>
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

export default connect( mapStateToProps, mapDispatchToProps )(PhoneComponent)
