import React from "react";
import Banner from "./Banner";
import Item from "./Item";




const Body = () => {
  return (
    <div className="layout">
        <div className="container my-5"> <Banner /></div>
       <Item />
    </div>
  );
};

export default Body;