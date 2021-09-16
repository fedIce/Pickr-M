import * as actions from '../action-types';
import {Menus} from '../../../../Entities/Restaurant'


export const loadRestaurantMenus = () => {
    return (dispatch) => {
        const menu = new Menus();
        console.log('START LOADING MENUS')

        dispatch({
            type: actions.FETCHING_DATA,
            payload: null,
            error: null
        })

        menu.loadMenus().then( result => {
            dispatch({
                type: actions.LOADED_MENU_DATA,
                payload: result,
                error: null
            })
        }).catch(err => dispatch({
            type: actions.FAILED_TO_LOAD_DATA,
            payload: null,
            error: err
        }))
    }
}