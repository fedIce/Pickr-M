import * as actions from '../actions/RestaurantActions/action-types'
const initialState = []

export const MenusReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.FETCHING_DATA:
            return { ...state, type: action.type, payload: action.payload, error: action.error }
        case actions.LOADED_MENU_DATA:
            return { ...state, type: action.type, payload: action.payload, error: action.error }
        case actions.LOADED_MENU_ITEMS_DATA:
            return { ...state, type: action.type, payload: action.payload, error: action.error }
        case actions.LOADING_CATEGORIES:
            return { ...state, type: action.type, payload: action.payload, error: action.error }
        case actions.FAILED_TO_LOAD_DATA:
            return { ...state, type: action.type, payload: action.payload, error: action.error }
        default:
            return state
    }
}