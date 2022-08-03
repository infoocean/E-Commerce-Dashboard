import React from "react";
import { Formik } from "formik";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up Your Account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link to="/"><Text color={"blue.400"} as={'span'}>features</Text></Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Formik
              const
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                number: "",
                password: "",
              }}
              validate={(values) => {

                const errors = {};

                if (values.first_name === "") {
                  errors.first_name = "** firstname Feild Required";
                }

                if (values.last_name === "") {
                  errors.last_name = "** lastname Feild Required";
                }

                if (!values.email) {
                  errors.email = "** Email Feild Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "** Invalid email address";
                }

                if (!values.number) {
                  errors.number = "** number Feild Required";
                }

                if (!values.password) {
                  errors.password = "** password Feild Required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }, event) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  const formdata = JSON.stringify(values, null, 2);
                  //alert(formdata);

                  //   fetch("https://foodielandnod.herokuapp.com/api/addContactDetails",
                  //     {
                  //       method: "POST",
                  //       headers: {
                  //         Accept: "application/json",
                  //         "Content-Type": "application/json",
                  //       },
                  //       body:
                  //         formdata,
                  //     }).then(function(response) {
                  //       console.log(response);
                  //       if(response.status===200) {
                  //         //console.log("success");
                  //         alert("data submitted successfully");
                  //       }else{
                  //         alert("email allready exists");
                  //         resetForm(values) ;
                  //       }
                  //   });

                  //event.preventDefault();
                  setSubmitting(false);
                }, 400);
              }}

              // onSubmit={(values) => {
              //   alert(JSON.stringify(values, null, 2));
              // }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          name="first_name"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          size={"sm"}
                        />
                      </FormControl>
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.first_name &&
                          touched.first_name &&
                          errors.first_name}
                      </Text>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          name="last_name"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          size={"sm"}
                        />
                      </FormControl>
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.last_name &&
                          touched.last_name &&
                          errors.last_name}
                      </Text>
                    </Box>
                  </HStack>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size={"sm"}
                    />
                  </FormControl>
                  <Text color={"red"} fontSize={"sm"}>
                    {errors.email && touched.email && errors.email}
                  </Text>
                  <FormControl id="number" >
                    <FormLabel>Number</FormLabel>
                    <Input
                      type="text"
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size={"sm"}
                    />
                  </FormControl>
                  <Text color={"red"} fontSize={"sm"}>
                    {errors.number && touched.number && errors.number}
                  </Text>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size={"sm"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Text color={"red"} fontSize={"sm"}>
                    {errors.password && touched.password && errors.password}
                  </Text>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      disabled={isSubmitting}
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>
            <Stack pt={2}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login">
                  <Text color={"blue.400"} as={"span"}>
                    Login
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
