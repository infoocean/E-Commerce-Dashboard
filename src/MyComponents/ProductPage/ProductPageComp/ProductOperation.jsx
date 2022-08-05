import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

function ProductOperation() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Add Product</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Add Categories</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Product </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ProductOperation;
