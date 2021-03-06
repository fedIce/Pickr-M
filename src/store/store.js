import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {
    UserReducer
} from './reducers/userReducer';
import {
    MenusReducer
} from './reducers/restaurantReducers';
import {
    themeReducer
} from './reducers/themeReducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['user', 'theme']
}

const RootReducer = combineReducers({
    user: UserReducer,
    theme: themeReducer,
    menus: MenusReducer
})

export default persistReducer(persistConfig, RootReducer)
