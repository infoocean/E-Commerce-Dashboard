import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import AddProductform from "./AddProductForm";
import ProductListSEc from "./ProductList";

function ProductOperation() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }} style={{border:'1px solid gray'}}>Add Product</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }} style={{border:'1px solid gray'}}>Add Categories</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }} style={{border:'1px solid gray'}}>Product </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddProductform/>
            <ProductListSEc/>
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ProductOperation;
