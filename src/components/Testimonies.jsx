import React from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";

const Testimonies = () => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  const stats = [
    { value: "15k+", label: "Outlets Worldwide" },
    { value: "2M+", label: "Satisfied Customers" },
    { value: "9M+", label: "Footwears Sold" },
  ];

  const testimonials = [
    {
      quote:
        "As a sneakerhead, Archies has really helped me realize my dream of owning a collection of various shoes. Great Collection. Truly love it!",
      author: "Andre",
    },
    {
      quote:
        "I recently ran about 25 pairs of sneakers and I bought them all from Archies, I will always get my sneaker here. 5 stars...",
      author: "Pete",
    },
    {
      quote:
        "For more than two years whenever I go to Archies, they're very considerate and friendly...",
      author: "Hendy",
    },
  ];

  return (
    <Box maxW="container.xl" mx="auto" py={8} px={8} color={"black"}>
      {isMobile ? (
        <VStack spacing={8} align="center">
          <VStack spacing={2} align="center">
            <Text fontSize="4xl" fontWeight="bold">
              {stats[1].value}
            </Text>
            <Text fontSize="xl" fontWeight="medium">
              {stats[1].label}
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <Text fontSize="2xl" fontWeight="bold">
              What Our Customers Say
            </Text>
            <Text fontSize="md" textAlign="center">
              Our customers love our products and service. Read their
              testimonials to learn more.
            </Text>
          </VStack>
        </VStack>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};

export default Testimonies;
