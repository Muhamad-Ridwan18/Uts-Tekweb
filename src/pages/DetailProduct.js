import React from "react";
import Navbar from "../component/Navbar";
import Banner1 from "../component/BannerAllProduct";
import ProductOverview from "../component/ProductOverview";
import ProductReview from "../component/ProductReview";

function DetailProduct() {

     return (
          <div>
               <Navbar></Navbar>
               <Banner1></Banner1>
               <ProductOverview></ProductOverview>
               <ProductReview></ProductReview>
          </div>
     )
}

export default DetailProduct;