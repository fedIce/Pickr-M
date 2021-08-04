import * as UserActionTypes from '../actions/UserActions/action-types';


const userState = {
    data: null,
    error:{}
}



export const UserReducer = ( state  = userState , action ) => {
    switch( action.type ){

        case UserActionTypes.LOADING:
            return { ...state, action: UserActionTypes.LOADING, data: action.payload, error: null }
        case UserActionTypes.SIGNIN:
            return { ...state, action: UserActionTypes.SIGNIN, data: action.payload, error: null }

        case UserActionTypes.SIGNUP:
            return { ...state, action: UserActionTypes.SIGNUP, data: action.payload, error: null }

        case UserActionTypes.SIGNOUT:
            return { ...state, action: UserActionTypes.SIGNOUT, data: null, error: null }

        case UserActionTypes.ERROR:
            return { ...state, action: UserActionTypes.ERROR, data: null, error: action.error }

        default:
            return state
    }
}