import './App.css'; 
import React, { Component } from 'react'; 
import { Route, BrowserRouter } from 'react-router-dom' 
import Seller from './Seller.jsx' 
import Item from './Item.jsx' 
import { initialItems, initialSellers } from './Data.js' 
let renderAllItems = () => {  
  return <div> 
    {initialItems.map(item => 
      (<Item 
        cost={item.price} 
        sellerId={item.sellerId} 
        imageLocation={item.image} 
        description={item.description}  
      />))} 
  </div> 
} 
let renderSeller = routerData => { 
  let sellerId = routerData.match.params.sid 
  let candidates = 
    initialSellers.filter(seller => { return seller.id === sellerId }) 
  return (<Seller seller={candidates[0]} />) 
}  
class App extends Component { 
  render() { 
    return ( 
      <BrowserRouter> 
        <div> 
          <Route exact={true} path='/' render={renderAllItems} /> 
          <Route exact={true} path='/seller/:sid' render={renderSeller} /> 
        </div> 
      </BrowserRouter> 
    ); 
  } 
} 
export default App; 