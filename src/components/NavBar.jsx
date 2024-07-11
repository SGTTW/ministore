import React from "react";
import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Image,
   
  Icon,
  Badge,
  Center,
} from "@chakra-ui/react";
 

import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/Images/logo.png";
import { AiFillShopping } from "react-icons/ai";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <Box as="nav" borderBottom="1px" borderColor="gray.200" py={2}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        // px={4}
      >
        {/* Logo */}
        <Image src={logo} alt="Logo" h="30px" />

        {/* Navigation Links */}
        <HStack spacing={6} color="gray.600" fontWeight="bold">
          <Link  to="/" color="green.500">
            Home
          </Link>
          <Link href="#">Categories</Link>
          <Link href="#">New Arrivals</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Store</Link>
          <Link href="#">FAQ</Link>
        </HStack>

        {/* Search Bar */}

        <InputGroup maxW="250px" variant={"outline"}>
          <Input
            placeholder="Search item"
            size="sm"
            borderRadius="md"
            _placeholder={{ color: "gray.500", opacity: 1 }}
          />
          <InputRightElement height={"100%"}>
            <CiSearch color="gray.500" />
          </InputRightElement>
        </InputGroup>

        {/* Icons */}
        <HStack spacing={4}>
          <Box position="relative">
            <Icon as={AiFillShopping} w={6} h={6} color="gray.600" />
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              borderRadius="full"
              bg="red.500"
              color="white"
              fontSize="xx-small"
            >
              3
            </Badge>
          </Box>
          <Icon as={FaUserCircle} w={5} h={5} color="gray.600" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
