import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import RootReducer from './store/store';
import thunk from 'redux-thunk'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import '../public/assets/css/index.css'

const store = createStore( RootReducer, {} , applyMiddleware(thunk) )
const persistor = persistStore(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store } >
            <PersistGate persistor={persistor}>
                <Router>
                    <DndProvider backend={HTML5Backend}>
                        <App/>
                    </DndProvider>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
    ,
    document.querySelector('#root')
)