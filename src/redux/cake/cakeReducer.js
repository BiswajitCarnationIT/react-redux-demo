import { BUY_CAKE } from './cakeType'
const initialState = {
    numOfCakes : 10
}
const cakeReducer = (state = initialState ,action) =>{
    console.log('from cakeReducer',state.numOfCakes);
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes - action.payload
        }
        default: return state
    }


}

export default cakeReducer