import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Link,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import leftImage from "../assets/Images/leftImage.png";
import rightImage from "../assets/Images/rightImage.png";
import logoImage from "../assets/Images/logo.png"; // Make sure to import your logo

function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  const footerSections = [
    {
      title: "About Us",
      links: [
        "Our Story",
        "Contact",
        "Careers",
        "News and Blog",
        "Press",
        "Advertise and Partners",
      ],
    },
    {
      title: "Services",
      links: [
        "Gift Cards",
        "Mobile App",
        "Shipping and Delivery",
        "Order Pickup",
        "Account Signup",
      ],
    },
    {
      title: "Help",
      links: [
        "Help Center",
        "Returns",
        "Track Orders",
        "Size Charts",
        "Contact Us",
        "Security and Fraud",
      ],
    },
    {
      title: "Social",
      links: ["Instagram", "Twitter", "Facebook", "Pinterest", "Blog"],
    },
  ];

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
        flexDirection={isMobile ? "column" : "row"}
      >
        {isMobile ? (
          <VStack spacing={6} align="center" width="100%">
            <Image src={logoImage} alt="Brand Logo" width="150px" />
            {footerSections.map((section, index) => (
              <Text key={index} fontWeight="bold" fontSize="lg">
                {section.title}
              </Text>
            ))}
          </VStack>
        ) : (
          <Box as="footer" color={"black"} bg={"none"} width="100%">
            <Flex
              maxW="container.xl"
              mx="auto"
              justifyContent="space-between"
              gap={4}
            >
              {footerSections.map((section, index) => (
                <VStack key={index} align="flex-start">
                  <Text fontWeight="bold">{section.title}</Text>
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex}>{link}</Link>
                  ))}
                </VStack>
              ))}
            </Flex>
          </Box>
        )}

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
}

export default Footer;
