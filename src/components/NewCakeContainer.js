import React,{useState} from 'react';
//import { buyCake } from '../redux/cake/cakeAction';
import { buyCake } from "../redux";
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [number,SetNumber] = useState(1)
  console.log('cakeContsainer',props.numOfCakes);
  return (
    <div>
      <h2>No of cakes - {props.numOfCakes} </h2>
        <input type = 'text' value={number} onChange={e => SetNumber(e.target.value)}/>
        {/* <button onClick={props.buyCake}>Buy cake</button> */}
      <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>
    </div>
  )
}

// dispatch action
//

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes, // specify numOfCakes  //selector
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
