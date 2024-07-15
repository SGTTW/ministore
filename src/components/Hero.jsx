import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack
} from "@chakra-ui/react";
import heroFoot from "../assets/Images/foot.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box bg="#EDF4EA" height={"35rem"}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify="space-between"
          minH={{ base: "auto", md: "400px" }}
        >
          <Box maxW={{ base: "100%", md: "50%" }} mb={{ base: 8, md: 0 }}>
            <Heading as="h1" size="2xl" color="green.800" mb={4}>
              All your favorite sneakers, in one place.
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Exclusively for sneakerheads of all ages, gender, and the rest of
              humanity
            </Text>
            <HStack>
              <Link to="/product_detail">
                <Button
                  colorScheme={"green"}
                  size="lg"
                  px={8}
                  _hover={{ bg: "green.600" }}
                >
                  Explore
                </Button>
              </Link>
            </HStack>
          </Box>
          <Box maxW={{ base: "100%", md: "45%" }}>
            <Image src={heroFoot} alt="Sneakers" objectFit="cover" w="full" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
