import React from "react";
import Navbar from "../component/Navbar";
import Heroes from "../component/Heroes";
import Incentives from "../component/Incentive";
import ListProduct from "../component/ListProduct";

function HomePage() {

     return (
          <div>
               <Navbar></Navbar>
               <Heroes></Heroes>
               <Incentives></Incentives>
               <ListProduct></ListProduct>
          </div>
     )
}

export default HomePage;