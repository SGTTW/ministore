import React, { useState } from "react";
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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiFillShopping } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");

  return (
    <Box as="nav" borderBottom="1px" borderColor="gray.200" py={2}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        {/* Logo */}
        <Image src={logo} alt="Logo" h="30px" />

   
        <HStack
          spacing={6}
          color="gray.600"
          fontWeight="bold"
          display={{ base: "none", md: "flex" }}
        >
          <Link to="/" color="green.500">
            Home
          </Link>
          <Link to="#">Categories</Link>
          <Link to="#">New Arrivals</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Store</Link>
          <Link to="#">FAQ</Link>
        </HStack>

        
        <InputGroup
          maxW="250px"
          variant={"outline"}
          display={{ base: "none", md: "flex" }}
        >
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

        {/* Icons - Always visible */}
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

          <IconButton
            icon={<FiMenu />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="#" onClick={onClose}>
                Categories
              </Link>
              <Link to="#" onClick={onClose}>
                New Arrivals
              </Link>
              <Link to="#" onClick={onClose}>
                Contact Us
              </Link>
              <Link to="#" onClick={onClose}>
                Store
              </Link>
              <Link to="#" onClick={onClose}>
                FAQ
              </Link>
              <InputGroup variant={"outline"}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
