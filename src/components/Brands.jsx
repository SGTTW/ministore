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

const products = [
  { id: 1, name: "Feather Step Classic", price: 259.99, image: featherStep },
  { id: 2, name: "Retro Air Glide", price: 199.99, image: retroAir },
  { id: 3, name: "New Balance Urban", price: 179.99, image: new_balancee },
  { id: 4, name: "Adidas ZX Comfort", price: 149.99, image: adidasZX },
  { id: 5, name: "Retro Adidas Sprint", price: 229.99, image: retroAdidas },
];

const Brands = () => {
  return (
    <Container maxW="container.xl" py={8}>
      {/* Popular Brands */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color={"black"}>
          Popular Brands
        </Heading>

        <Wrap spacing="20px">
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={adidas}
                alt="Adidas"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={nike}
                alt="Nike"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={puma}
                alt="puma"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={fila}
                alt="fila"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={new_balance}
                alt="new_balance"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={reebok}
                alt="reebok"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={converse}
                alt="converse"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={vans}
                alt="vans"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px">
              <Image
                src={oasis}
                alt="oasis"
                maxW="80%"
                maxH="80%"
                objectFit="contain"
              />
            </Center>
          </WrapItem>
        </Wrap>
      </Box>

      {/* Best Deals Today */}
      <Box>
        <Heading as="h2" size="lg" mb={2} color={"black"}>
          Best Deals Today
        </Heading>

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
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                />
                <Text fontSize="sm" mt={1}>
                  {product.name}
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  ${product.price.toFixed(2)}
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
        <Divider my={16} borderColor="gray.300" borderWidth="1px" />
      </Box>
    </Container>
  );
};

export default Brands;
