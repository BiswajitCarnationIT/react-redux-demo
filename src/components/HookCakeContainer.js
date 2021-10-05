import React from 'react'
import {useSelector,useDispatch} from 'react-redux'  // similar to mapDispatchToProps
import { buyCake } from '../redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)  //  similar to mapDispatchToProps
    const dispatch = useDispatch()   ///    similar to mapDispatchToProps
    return (
        <div>
            <h2>Num of Cakes(hook) - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HookCakeContainer
