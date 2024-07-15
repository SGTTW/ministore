import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  IconButton,
} from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import adidas from "../assets/Images/adidas.png";
import converse from "../assets/Images/converse.png";
import fila from "../assets/Images/fila.png";
import nike from "../assets/Images/nike.png";
import reebok from "../assets/Images/reebok.png";
import puma from "../assets/Images/puma.png";
import new_balance from "../assets/Images/new_balance.png";
import vans from "../assets/Images/vans.png";
import oasis from "../assets/Images/oasis.png";
import UseProducts from "./UseProducts";

const Brands = () => {
  const { products, loading, error } = UseProducts();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [currentProductSet, setCurrentProductSet] = useState(0);

  const brands = [
    { name: "Adidas", image: adidas },
    { name: "Nike", image: nike },
    { name: "Puma", image: puma },
    { name: "Fila", image: fila },
    { name: "New Balance", image: new_balance },
    { name: "Reebok", image: reebok },
    { name: "Converse", image: converse },
    { name: "Vans", image: vans },
    { name: "Oasis", image: oasis },
  ];

  const nextItem = (setIndex, length) => {
    setIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevItem = (setIndex, length) => {
    setIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const renderBrand = (brand, index) => (
    <Center key={index} w="80px" h="80px">
      <Image
        src={brand.image}
        alt={brand.name}
        maxW="80%"
        maxH="80%"
        objectFit="contain"
      />
    </Center>
  );

  const renderProduct = (product) => (
    <Card
      key={product.id}
      backgroundColor="white"
      flex={1}
      maxW={{ base: "100%", md: "30%" }}
    >
      <CardBody color="black" py={2}>
        <Image
          src={`https://api.timbu.cloud/images/${product.photos?.[0]?.url}`}
          alt={product.name}
          borderRadius="lg"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Text fontSize="lg" mt={1} textAlign={"left"}>
          {product.name || "No name"}
        </Text>
        <Text fontSize="sm" fontWeight="bold" textAlign={"left"}>
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
  );

  const getCurrentProductSet = () => {
    const startIndex = currentProductSet * 3;
    return products.slice(startIndex, startIndex + 3);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color={"black"} textAlign={"left"}>
          Popular Brands
        </Heading>

        <Box>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <IconButton
              icon={<GoChevronLeft />}
              onClick={() => prevItem(setCurrentBrandIndex, brands.length)}
              isDisabled={brands.length <= 1}
            />
            {renderBrand(brands[currentBrandIndex], currentBrandIndex)}
            <IconButton
              icon={<GoChevronRight />}
              onClick={() => nextItem(setCurrentBrandIndex, brands.length)}
              isDisabled={brands.length <= 1}
            />
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            flexWrap="wrap"
            justifyContent="space-between"
            gap={2}
          >
            {brands.map(renderBrand)}
          </Flex>
        </Box>
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
          <Box>
            <Flex
              display={{ base: "flex", md: "none" }}
              justifyContent="space-between"
              alignItems="center"
              mb={4}
              gap={3}
            >
              <IconButton
                icon={<GoChevronLeft />}
                onClick={() =>
                  prevItem(setCurrentProductIndex, products.length)
                }
                isDisabled={products.length <= 1}
              />
              {renderProduct(products[currentProductIndex])}
              <IconButton
                icon={<GoChevronRight />}
                onClick={() =>
                  nextItem(setCurrentProductIndex, products.length)
                }
                isDisabled={products.length <= 1}
              />
            </Flex>
            <Flex
              display={{ base: "none", md: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
              <IconButton
                icon={<GoChevronLeft />}
                onClick={() =>
                  setCurrentProductSet((prev) => Math.max(0, prev - 1))
                }
                isDisabled={currentProductSet === 0}
              />
              <Flex flex={1} justifyContent="space-between" gap={2}>
                {getCurrentProductSet().map(renderProduct)}
              </Flex>
              <IconButton
                icon={<GoChevronRight />}
                onClick={() =>
                  setCurrentProductSet((prev) =>
                    Math.min(Math.floor((products.length - 1) / 3), prev + 1)
                  )
                }
                isDisabled={(currentProductSet + 1) * 3 >= products.length}
              />
            </Flex>
          </Box>
        )}

        <Divider my={16} borderColor="gray.300" borderWidth="1px" />
      </Box>
    </Container>
  );
};

export default Brands;
