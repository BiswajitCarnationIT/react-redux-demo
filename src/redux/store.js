import {createStore,applyMiddleware } from 'redux'
//import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


//const store = createStore(cakeReducer) //reducer function as parameter

//const store = createStore(rootReducer,applyMiddleware(logger))

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))


export default store