import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import heroFoot from "../assets/Images/foot.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      bg="#EDF4EA"
      minHeight={{ base: "auto", md: "35rem" }}
      py={{ base: 8, md: 0 }}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify="space-between"
          minH={{ base: "auto", md: "400px" }}
        >
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={4}
            maxW={{ base: "100%", md: "50%" }}
            mb={{ base: 8, md: 0 }}
            order={{ base: 1, md: 1 }}
          >
            <Heading
              as="h1"
              size="2xl"
              color="green.800"
              textAlign={{ base: "center", md: "left" }}
            >
              All your favorite sneakers, in one place.
            </Heading>
            <Text
              fontSize="lg"
              color="gray.600"
              textAlign={{ base: "center", md: "left" }}
            >
              Exclusively for sneakerheads of all ages, gender, and the rest of
              humanity
            </Text>
            <Link to="/product_detail">
              <Button
                colorScheme="green"
                size="lg"
                px={8}
                _hover={{ bg: "green.600" }}
              >
                Explore
              </Button>
            </Link>
          </VStack>
          <Box
            maxW={{ base: "100%", md: "45%" }}
            order={{ base: 2, md: 2 }}
            mt={{ base: 4, md: 0 }}
          >
            <Image
              src={heroFoot}
              alt="Sneakers"
              objectFit="contain"
              w="full"
              h={{ base: "auto", md: "full" }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
