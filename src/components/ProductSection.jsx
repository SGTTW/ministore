

import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  Text,
  Button,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  CardFooter,
  Spinner,
  Divider,
} from "@chakra-ui/react";

import adidas from "../assets/Images/adidas.png";
import converse from "../assets/Images/converse.png";
import fila from "../assets/Images/fila.png";
import nike from "../assets/Images/nike.png";
import reebok from "../assets/Images/reebok.png";
import puma from "../assets/Images/puma.png";
import new_balance from "../assets/Images/new_balance.png";
import vans from "../assets/Images/vans.png";
import oasis from "../assets/Images/oasis.png";
import featherStep from "../assets/Images/featherStep.png";
import retroAir from "../assets/Images/retroAir.png";
import new_balancee from "../assets/Images/new_balancee.png";
import adidasZX from "../assets/Images/adidasZX.png";
import retroAdidas from "../assets/Images/retroAdidas.png";
import { Link } from "react-router-dom";
import UseProducts from "./UseProducts";

// const products = [
//   { id: 1, name: "Feather Step Classic", price: 259.99, image: featherStep },
//   { id: 2, name: "Retro Air Glide", price: 199.99, image: retroAir },
//   { id: 3, name: "New Balance Urban", price: 179.99, image: new_balancee },
//   { id: 4, name: "Adidas ZX Comfort", price: 149.99, image: adidasZX },
//   { id: 5, name: "Retro Adidas Sprint", price: 229.99, image: retroAdidas },
// ];

const ProductSection = () => {
  const { products, loading, error } = UseProducts();
  return (
  

    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color={"black"} textAlign={"left"}>
          Popular Brands
        </Heading>

        <Wrap spacing="20px">
          {[
            adidas,
            nike,
            puma,
            fila,
            new_balance,
            reebok,
            converse,
            vans,
            oasis,
          ].map((brand, index) => (
            <WrapItem key={index}>
              <Center w="80px" h="80px">
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  maxW="80%"
                  maxH="80%"
                  objectFit="contain"
                />
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2} color={"black"} textAlign={"left"}>
          Best Deals Today
        </Heading>

      

        {loading ? (
          <Center h="200px">
            <Spinner size="xl" />
          </Center>
        ) : error ? (
          <Center h="200px">
            <Text color="red.500">Error: {error}</Text>
          </Center>
        ) : products.length === 0 ? (
          <Center h="200px">
            <Text>
              No products available. Products state: {JSON.stringify(products)}
            </Text>
          </Center>
        ) : (
          <Flex
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justifyContent="space-between"
            gap={2}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                backgroundColor="white"
                maxW={{ base: "100%", sm: "180px" }}
                w="100%"
              >
                <CardBody color="black" py={2}>
                  <Image
                    src={`https://api.timbu.cloud/images/${product.photos?.[0]?.url}`}
                    alt={product.name}
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                  <Text fontSize="sm" mt={1}>
                    {product.name || "No name"}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold" textAlign={"inherit"}>
                    {/* ${parseFloat(product.price)?.toFixed(2) || "No price"} */}
                    $
                    {parseFloat(product.current_price[0]?.NGN[0])?.toFixed(2) ||
                      "No price"}
                  </Text>
                </CardBody>
                <CardFooter pt={0} pb={2} width={"70%"}>
                  <Button
                    variant="outline"
                    color={"grey"}
                    size="sm"
                    borderWidth={"1px"}
                    borderColor={"grey"}
                  >
                    Add to cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        )}

        <Divider my={16} borderColor="gray.300" borderWidth="1px" />
      </Box>
    </Container>
  );
};

export default ProductSection;
