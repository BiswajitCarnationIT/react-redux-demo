import React from 'react';
//import { buyCake } from '../redux/cake/cakeAction';
import { buyCake } from "../redux";
import { connect } from 'react-redux';

function CakeContainer(props) {
  console.log('cakeContsainer',props.numOfCakes);
  return (
    <div>
      <h2>No of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

// dispatch action
//

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes, // specify numOfCakes  //selector
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
