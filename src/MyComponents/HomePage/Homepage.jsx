import React from "react";
import Headercard from "./HomePageComp/Headercard";
import HeaderSearchOption from "./HomePageComp/Headersearchoption";
import OrdersetSec  from "./HomePageComp/OrderDetSec";
import PopularDetailsSec from "./HomePageComp/Popularproduct";

function Homepage() {
  return (
    <>
    <HeaderSearchOption/>
    <Headercard/>
    <OrdersetSec/>
    <PopularDetailsSec/>
    </>
  );
}

export default Homepage;
