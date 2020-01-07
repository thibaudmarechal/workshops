import React, { Component } from "react";
import items from "./data.js";

class Item extends Component {
  render = () => {
    const item = items.find(item => item.id === this.props.itemId);
    return (
      <div>
        <h1>
          {item.name} — {item.price}
        </h1>
        <p>{item.description}</p>
        <img className="img-style" src={item.img} />
        <ul>
          <h4>Tags</h4>
          {item.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  };
}

export default Item;
