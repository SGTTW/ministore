

import React from "react";
import { Box, Text, Flex, VStack, HStack } from "@chakra-ui/react";

const Testimonies = () => {
  const stats = [
    { value: "15k+", label: "Outlets Worldwide" },
    { value: "2M+", label: "Satisfied Customers" },
    { value: "9M+", label: "Footwears Sold" },
  ];

  const testimonials = [
    {
      quote: "As a sneakerhead, Archies has really helped me realize my dream of owning a collection of various shoes. Great Collection. Truly love it!",
      author: "Andre",
    },
    {
      quote: "I recently ran about 25 pairs of sneakers and I bought them all from Archies, I will always get my sneaker here. 5 stars...",
      author: "Pete",
    },
    {
      quote: "For more than two years whenever I go to Archies, they're very considerate and friendly...",
      author: "Hendy",
    },
  ];

  return (
    <Box maxW="container.xl" mx="auto" py={8} px={8} color={"black"}> 
      <HStack justifyContent="space-between" mb={8}>
        {stats.map((stat, index) => (
          <VStack key={index} align="center">
            <Text fontSize="3xl" fontWeight="bold">
              {stat.value}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {stat.label}
            </Text>
          </VStack>
        ))}
      </HStack>

      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          What Our Customers Say
        </Text>
      </Box>

      <Flex justifyContent="space-between">
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            bg="green.100"
            p={4}
            borderRadius="md"
            maxW="30%"
          >
            <Text fontSize="sm" mb={2} fontStyle="italic">
              "{testimonial.quote}"
            </Text>
            <Text fontWeight="bold" textAlign="right">
              - {testimonial.author}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonies;