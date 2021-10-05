import React from 'react';
import { buyIceCream } from "../redux";
import { connect } from 'react-redux';

function IceCreamContainer(props) {
  console.log('IceCreamContainer',props.numOfCakes);
  return (
    <div>
      <h2>No of iceCream - {props.numOfIceCream} </h2>
      <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}

// dispatch action
//

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream // specify numOfIceCream  //selector
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
