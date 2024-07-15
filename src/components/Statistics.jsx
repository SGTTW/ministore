import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import leftImage from "../assets/Images/leftImage.png";
import rightImage from "../assets/Images/rightImage.png";

const Statistics = () => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      bg="#C9D4C5"
      py={8}
      px={8}
      position="relative"
      overflow="hidden"
      my={8}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        minHeight={isMobile ? "auto" : "200px"}
      >
        <Box
          bg="green.700"
          color="white"
          p={6}
          borderRadius="md"
          maxWidth={isMobile ? "100%" : "70%"}
          zIndex={1}
          textAlign="center"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Get up to 15% off on all items above $300
          </Text>
          <Button colorScheme="white" variant="outline">
            Learn More
          </Button>
        </Box>

        {!isMobile && (
          <>
            <Image
              src={leftImage}
              alt="Left shoe"
              position="absolute"
              left="-20px"
              top={"-15px"}
              bottom="0"
              height="120%"
              objectFit="contain"
              zIndex={0}
            />

            <Image
              src={rightImage}
              alt="Right shoe"
              position="absolute"
              right="-20px"
              bottom="0"
              height="120%"
              objectFit="contain"
              zIndex={0}
            />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Statistics;
