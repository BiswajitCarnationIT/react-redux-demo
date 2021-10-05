import {createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer) //reducer function as parameter



export default store