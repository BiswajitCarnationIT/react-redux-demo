import {createStore } from 'redux'
//import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'


//const store = createStore(cakeReducer) //reducer function as parameter

const store = createStore(rootReducer)


export default store