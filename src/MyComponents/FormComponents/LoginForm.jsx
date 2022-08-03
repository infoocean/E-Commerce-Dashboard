import React from "react";
import { Formik } from "formik";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
          <Formik

            const initialValues = {{
              email: "",
              password: "",
            }}

            validate={(values) => {

              const errors = {};

              if (!values.email) {
                errors.email = "** Email Feild Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "** Invalid email address";
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
                <Stack >
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size={'sm'}
                    />
                  </FormControl>
                  <Text color={"red"} fontSize={"sm"}>
                    {errors.email && touched.email && errors.email}
                  </Text>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input 
                        type="password" 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size={'sm'}
                        />
                  </FormControl>
                  <Text color={"red"} fontSize={"sm"}>
                    {errors.password && touched.password && errors.password}
                  </Text>
                  <Stack spacing={10} >
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link to="/forgatpassword"><Text color={"blue.400"} as={'span'}>Forgot password?</Text></Link>
                    </Stack>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
          <Stack pt={3}>
              <Text align={"center"}>
                Don't have an account? <Link  to = "/signup"><Text color={"blue.400"} as={'span'}>SignUp</Text></Link>
              </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
