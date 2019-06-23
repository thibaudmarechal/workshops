import React, { Component } from 'react'; 
import './App.css'; 
class Seller extends Component { 
  render() { 
    return ( 
      <div className="card center"> 
        <div>{this.props.seller.name}</div> 
        <div>{this.props.seller.rating}</div> 
      </div> 
    ); 
  } 
} 
export default Seller; 