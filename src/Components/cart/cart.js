import React, { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const favImages = useSelector((state) => state.favorites);
    return (

        <div className="search-box">
            <h1>here</h1>
        </div>
      );

}


export default Cart;
