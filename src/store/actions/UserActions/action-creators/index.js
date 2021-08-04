import * as actions from "../action-types";
import { Auth } from '../../../../Entities/UserObjects'

export const loginUser = ( user ) => {
    return ( dispatch ) => {
        const currentUser = new Auth();
        dispatch({
            type: actions.LOADING,
            payload: actions.LOADING,
            error: null
        })
        currentUser.loginWithEmailAndPassword(user.email, user.password).then( data => {
            dispatch({
                type: actions.SIGNIN,
                payload: currentUser.grab_token(),
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


export const logout = ( ) => {
    return ( dispatch ) => {
        const currentUser = new Auth();

        currentUser.signOut().then(() => {
            dispatch({
                type: actions.SIGNOUT,
                payload: null,
                error: null,
            })
        }).catch(error => {
            dispatch({
                type: actions.ERROR,
                payload: null,
                error: error,
            })
        })
    }
}


export const createNewUser = ( data ) => {
    return (dispatch) => {

        dispatch({
            type: actions.LOADING,
            payload: actions.LOADING,
            error: null
        })
        
        const currentUser = new Auth();
        currentUser.createUserWithEmailAndPassword( data ).then(() => {
            dispatch({
                type:actions.SIGNIN,
                payload: currentUser.grab_token(),
                error: null
            })
        }).catch(err => {
            dispatch({
                type:actions.ERROR,
                payload: null,
                error: err
            })
        })
    }
}