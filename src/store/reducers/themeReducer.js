import * as actionTypes from '../actions/UserActions/action-types';


const initalState = {
    activeTheme: actionTypes.LIGHT
}

export const themeReducer = ( state = initalState , action ) => {
    switch(action.type){
        case actionTypes.LIGHT:
            return { ...state, activeTheme: actionTypes.LIGHT, error:null }

        case actionTypes.DARK:
            return { ...state, activeTheme: actionTypes.DARK, error: null }

        default:
            return state
    }
}