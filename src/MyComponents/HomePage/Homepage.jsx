import React from "react";
import AreaChart from "./HomePageComp/AreaChart";
import DoughnutChart from "./HomePageComp/DoughnutChart";
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
    <AreaChart/>
    <DoughnutChart/>
    </>
  );
}

export default Homepage;
