import React from "react";
import styles from "../index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

const MenuHeader = ({ head }) => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center" id="title">
        <h1 className="mb-0 display-1">{head.name}</h1>
        <img src={head.logo} className="img-fluid" alt="The Lucky Cat Logo" />
      </div>
      <div className="text-2xl text-center" id="desc">
        {head.desc}
      </div>
    </div>
  );
};

export default MenuHeader;
