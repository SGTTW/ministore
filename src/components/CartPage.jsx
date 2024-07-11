import React from 'react';
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Divider,
} from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";


// Assume these imports for your product images
import product1 from "../assets/Images/adidas.png";
import product2 from "../assets/Images/adidas.png";
import product3 from "../assets/Images/adidas.png";
import product4 from "../assets/Images/adidas.png";

const CartItem = ({ image, name, size, color, price }) => (
  <Flex alignItems="center" justifyContent="space-between" w="full" py={2}>
    <Checkbox />
    <Image src={image} alt={name} boxSize="50px" objectFit="cover" />
    <VStack align="start" flex={1} ml={4}>
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">Size: {size}, Color: {color}</Text>
    </VStack>
    <NumberInput defaultValue={1} min={1} max={99} w="100px">
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
    <Text fontWeight="bold" ml={4}>${price}</Text>
    <MdDelete ml={4} cursor="pointer" />
  </Flex>
);

const CartPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>My Cart</Text>
      <Flex>
        <Box flex={2} mr={8}>
          <Text fontWeight="bold" mb={4}>PRODUCT</Text>
          <VStack align="stretch" spacing={4} divider={<Divider />}>
            <CartItem image={product1} name="New Balance Marauder" size="8" color="Yellow" price="329.99" />
            <CartItem image={product2} name="Air Jordan 6 DM" size="9" color="Green/Black" price="225.99" />
            <CartItem image={product3} name="Air Jordan Classy" size="10" color="White" price="349.99" />
            <CartItem image={product4} name="New Balance 550 Core" size="9" color="White/Blue/Yellow" price="229.00" />
          </VStack>
        </Box>
        <Box flex={1} bg="gray.50" p={6} borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Your Order</Text>
          <VStack align="stretch" spacing={3}>
            <Flex justifyContent="space-between">
              <Text>Air Jordan 6 DM (1)</Text>
              <Text>$329.99</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Air Jordan 6 DM (1)</Text>
              <Text>$349.99</Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Subtotal</Text>
              <Text fontWeight="bold">$679.98</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Discount</Text>
              <Text>-$102</Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between" fontWeight="bold">
              <Text>Grand Total</Text>
              <Text>$577.98</Text>
            </Flex>
            <Button colorScheme="green" size="lg" mt={4}>
              Proceed to Checkout
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default CartPage;