import React from "react";
import Navbar from "../component/Navbar";
import Banner1 from "../component/BannerAllProduct";
import CheckoutStyle from "../component/checkout";

function CheckoutPage() {

     return (
          <div>
               <Navbar></Navbar>
               <Banner1></Banner1>
               <CheckoutStyle></CheckoutStyle>
          </div>
     )
}

export default CheckoutPage;