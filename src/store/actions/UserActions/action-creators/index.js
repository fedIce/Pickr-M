import * as actions from "../action-types";
import User from '../../../../Entities/UserObjects'

export const loginUser = ( user ) => {
    return ( dispatch ) => {
        const currentUser = new User();
        dispatch({
            type: actions.LOADING,
            payload: actions.LOADING,
            error: null
        })
        currentUser.loginWithEmailAndPassword(user.email, user.password).then(() => {
            console.log('DATA:', currentUser.to_json())
            dispatch({
                type: actions.SIGNIN,
                payload: currentUser.to_json(),
                error: null,
            })
        }).catch( err => {
            dispatch({
                type: actions.ERROR,
                payload: null,
                error: err
            })
        })
        
    } 
}

export const changeTheme = ( currentTheme ) => {
    return ( dispatch ) => {
        if (currentTheme === actions.LIGHT){
            dispatch({
                type: actions.DARK,
                error: null
            })
        }else {
            dispatch({
                type: actions.LIGHT,
                error: null
            })
        }
    }
}