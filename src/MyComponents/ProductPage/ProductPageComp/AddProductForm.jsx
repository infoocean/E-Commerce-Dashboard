import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

function AddProductform() {
  return (
    <>
      <div class="row text-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="col-lg-4 p-4">
          <Stack>
            <FormControl id="email">
              <FormLabel>Prosuct Name</FormLabel>
              <Input type="email" size="sm" />
            </FormControl>
          </Stack>
          <HStack pt={5}>
            <FormControl id="email">
              <FormLabel>Product Stock</FormLabel>
            </FormControl>
            <HStack>
              <FormControl id="email">
                <Input type="email" size="sm" />
              </FormControl>
              <FormControl id="email">
                <Input type="email" size="sm" />
              </FormControl>
            </HStack>
          </HStack>
        </div>
        <div className="col-lg-4 p-4">
          <Stack>
            <FormControl id="email">
              <FormLabel>Category Name</FormLabel>
              <Input type="email" size="sm" />
            </FormControl>
          </Stack>
          <HStack pt={5}>
            <FormControl id="email">
              <FormLabel>Product Stock</FormLabel>
            </FormControl>
            <HStack>
              <FormControl id="email">
                <Input type="email" size="sm" />
              </FormControl>
              <FormControl id="email">
                <Input type="email" size="sm" />
              </FormControl>
            </HStack>
          </HStack>
        </div>
        <div className="col-lg-4 p-4" style={{display:'flex', alignItems:'center'}}>
          <Button colorScheme="blue" size="sm" >
            Add 
          </Button>
          <Button colorScheme="red" size="sm" ml={5}>
            Reset
          </Button>
        </div>
        <div className="pt-1 pb-1" style={{textAlign:'left'}}>
          <Text>Total : 27 Product</Text>
        </div>
      </div>
    </>
  );
}

export default AddProductform;
