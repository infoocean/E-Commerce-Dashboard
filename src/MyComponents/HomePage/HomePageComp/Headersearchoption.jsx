import React from "react";
import { Text, Container, Flex, Spacer, Box, Select } from "@chakra-ui/react";

export default function HeaderSearchOption() {
  return (
    <Container mt={2} mb={5} maxW="6xl">
      <Flex>
        <Box>
          <Text
            fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
            fontWeight="800"
          >
            Home
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Select placeholder="Select option" style={{backgroundColor:'white'}}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
    </Container>
  );
}
