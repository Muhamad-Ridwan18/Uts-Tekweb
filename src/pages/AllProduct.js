import React from "react";
import Navbar from "../component/Navbar";
import Banner1 from "../component/BannerAllProduct";
import GridProduct from "../component/GridProduct";
import TrendProduct from "../component/TrendProduct";

function AllProduct() {

     return (
          <div>
               <Navbar></Navbar>
               <Banner1></Banner1>
               <TrendProduct></TrendProduct>
               <GridProduct></GridProduct>
          </div>
     )
}

export default AllProduct;