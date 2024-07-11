import { Box, Flex, VStack, Text, Link, Image,Button, } from "@chakra-ui/react";
import leftImage from "../assets/Images/leftImage.png"
import rightImage from "../assets/Images/rightImage.png"
function Footer() {
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
      minHeight="200px"
    >
      {/* <Box
        bg="green.700"
        color="white"
        p={6}
        borderRadius="md"
        maxWidth="70%"
        zIndex={1}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Get up to 15% off on all items above $300
        </Text>
        <Button colorScheme="white" variant="outline">
          Learn More
        </Button>
      </Box> */}



{/* --------- */}


<Box as="footer"   color={"black"} bg={"none"}   >
      <Flex maxW="container.xl" mx="auto" justifyContent="space-between" gap={4}>
        <VStack align="flex-start">
          <Text fontWeight="bold">About Us</Text>
          <Link>Our Story</Link>
          <Link>Contact</Link>
          <Link>Careers</Link>
          <Link>News and Blog</Link>
          <Link>Press</Link>
          <Link>Advertise and Partners</Link>
        </VStack>
        
        <VStack align="flex-start">
          <Text fontWeight="bold">Services</Text>
          <Link>Gift Cards</Link>
          <Link>Mobile App</Link>
          <Link>Shipping and Delivery</Link>
          <Link>Order Pickup</Link>
          <Link>Account Signup</Link>
        </VStack>
        
        <VStack align="flex-start">
          <Text fontWeight="bold">Help</Text>
          <Link>Help Center</Link>
          <Link>Returns</Link>
          <Link>Track Orders</Link>
          <Link>Size Charts</Link>
          <Link>Contact Us</Link>
          <Link>Security and Fraud</Link>
        </VStack>
        
        <VStack align="flex-start">
          <Text fontWeight="bold">Social</Text>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
          <Link>Facebook</Link>
          <Link>Pinterest</Link>
          <Link>Blog</Link>
        </VStack>
      </Flex>
      
      </Box>










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
    </Flex>
  </Box>
  );
}

export default Footer;



//   <Box as="footer" bg="gray.100" py={8}>
//       <Flex maxW="container.xl" mx="auto" justifyContent="space-between">
//         <VStack align="flex-start">
//           <Text fontWeight="bold">About Us</Text>
//           <Link>Our Story</Link>
//           <Link>Contact</Link>
//           <Link>Careers</Link>
//           <Link>News and Blog</Link>
//           <Link>Press</Link>
//           <Link>Advertise and Partners</Link>
//         </VStack>
        
//         <VStack align="flex-start">
//           <Text fontWeight="bold">Services</Text>
//           <Link>Gift Cards</Link>
//           <Link>Mobile App</Link>
//           <Link>Shipping and Delivery</Link>
//           <Link>Order Pickup</Link>
//           <Link>Account Signup</Link>
//         </VStack>
        
//         <VStack align="flex-start">
//           <Text fontWeight="bold">Help</Text>
//           <Link>Help Center</Link>
//           <Link>Returns</Link>
//           <Link>Track Orders</Link>
//           <Link>Size Charts</Link>
//           <Link>Contact Us</Link>
//           <Link>Security and Fraud</Link>
//         </VStack>
        
//         <VStack align="flex-start">
//           <Text fontWeight="bold">Social</Text>
//           <Link>Instagram</Link>
//           <Link>Twitter</Link>
//           <Link>Facebook</Link>
//           <Link>Pinterest</Link>
//           <Link>Blog</Link>
//         </VStack>
//       </Flex>
      
//       {/* You might want to add the images here */}
//       <Flex justifyContent="space-between" maxW="300px" mx="auto" mt={8}>
//         <Image src="/path-to-dog-image.jpg" alt="Dog" boxSize="100px" objectFit="cover" />
//         <Image src="/path-to-shoes-image.jpg" alt="Shoes" boxSize="100px" objectFit="cover" />
//       </Flex>
//     </Box>