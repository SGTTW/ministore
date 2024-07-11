import React from "react";
import {
  Box,
  Container,
  Image,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Select,
  Link,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import product_detail from "../assets/Images/adidas.png";

const ProductDetail = () => {
  return (
    <Container maxW="container.xl" py={8} color={"black"}>
      <Link href="/" mb={4} display="flex" alignItems="center">
        <Icon as={FaChevronLeft} />
        Back to Homepage
      </Link>

      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <VStack align="stretch" flex={1} spacing={4}>
          <Box w={"2rem"}>
            <Image src={product_detail} alt="Air Jordan 6 Retro" mb={4} />
          </Box>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={product_detail}
                alt={`Thumbnail ${i}`}
                objectFit="cover"
              />
            ))}
          </Grid>
          <Text fontSize="sm" color="gray.500">
            *This item has already been added to your cart.
          </Text>
        </VStack>

        <VStack align="stretch" flex={1} spacing={4}>
          <Heading size="lg">Air Jordan 6 Retro "Defining Moments"</Heading>
          <HStack>
            {[1, 2, 3, 4, 5].map((i) => (
              <CiStar key={i} color="yellow.400" />
            ))}
          </HStack>
          <Flex gap={4}>
            <Select placeholder="Size" w="100px">
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Select>
            <Select placeholder="Qty" w="100px">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          </Flex>
          <HStack>
            <Box w="20px" h="20px" bg="black" borderRadius="full" />
            <Box w="20px" h="20px" bg="blue.500" borderRadius="full" />
            <Box w="20px" h="20px" bg="orange.500" borderRadius="full" />
          </HStack>
          <Text fontWeight="bold" fontSize="2xl">
            $329.99
          </Text>
          <Text>
            The Air Jordan 6 Retro "Defining Moments" embodies a fusion of
            elegance and boldness, making a striking visual statement with its
            iconic silhouette.
          </Text>
          <Text>
            Designed for both style and impact, this sneaker seamlessly merges
            classic elements with contemporary flair, appealing to sneaker
            enthusiasts and fashion-forward individuals alike.
          </Text>
          <Button colorScheme="green" size="lg" w="full">
            Buy Now
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default ProductDetail;
