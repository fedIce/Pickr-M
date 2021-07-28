import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../../store/actions/UserActions/action-creators';
import '../../style.css'

const PhoneVerifyComponent = ( props ) => {

    const [ code , setCode ] = React.useState("")


    React.useEffect(() => {

    },[])

    const getCode = (e) => {
        const phone = e.target
        // Validate Email
        setCode(validator(phone.value, phone.name))
    }

  

    const validator = ( data, type ) => {

        if (type === "phone"){
            return data
        }
    }

    const handlePhoneVerify = (e) => {
        const contraband = [null, "", undefined]

        console.log(`Phone Number:`, code, contraband)

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
                                    <div className="phone-v-input-area">
                                        <input onChange={(event) => getCode(event)} name="num1" type="text"  className="input-phone" placeholder="0" />
                                        <input onChange={(event) => getCode(event)} name="num2" type="text"  className="input-phone" placeholder="0" />
                                        <input onChange={(event) => getCode(event)} name="num3" type="text"  className="input-phone" placeholder="0" />
                                        <input onChange={(event) => getCode(event)} name="num4" type="text"  className="input-phone" placeholder="0" />
                                    </div>
                                </div>

                                <div className="form-data" > 
                                    <button disabled={props.user === 'LOADING'} onClick={handlePhoneVerify} type="submit" className="input-submit" >
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

export default connect( mapStateToProps, mapDispatchToProps )(PhoneVerifyComponent)
