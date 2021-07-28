import * as UserActionTypes from '../actions/UserActions/action-types';


const userState = {
    data: null,
    error:{}
}



export const UserReducer = ( state  = userState , action ) => {
    switch( action.type ){

        case UserActionTypes.LOADING:
            return { ...state, data: action.payload, error: null }
        case UserActionTypes.SIGNIN:
            return { ...state, data: action.payload, error: null }

        case UserActionTypes.SIGNUP:
            return { ...state, data: action.payload, error: null }

        case UserActionTypes.SIGNOUT:
            return { ...state, action: null, error: null }

        case UserActionTypes.ERROR:
            return { ...state, data: null, error: action.error }

        default:
            return state
    }
}