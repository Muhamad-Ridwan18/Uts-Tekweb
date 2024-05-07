import React from "react";
import Navbar from "../component/Navbar";
import Banner1 from "../component/BannerAllProduct";
import ListCart from "../component/ListCart";

function CartPage() {

     return (
          <div>
               <Navbar></Navbar>
               <Banner1></Banner1>
               <ListCart></ListCart>
          </div>
     )
}

export default CartPage;