import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.


const path = "images/";
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item }) => {
  return (
    <div className="container-fluid">
      <div className="row" id="menuItem">
        <div className="col-4" id="left">
          <img src={`${path}${item.imageName}`} className="img-fluid" alt={item.title}/>
        </div>
        <div className="col-8" id="right">
          <div className="row mb-0">
            <p id="itemName">{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div className="row" id="info">
            <div className="col">
              <p>{item.price}</p>
            </div>
            <div className="col">
              <button type="button">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
