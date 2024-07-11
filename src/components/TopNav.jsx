import React from "react";
import { Flex, Text, Box, HStack } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  return (
    <Flex backgroundColor={"#0B320C"} px={{ base: 4, md: 8 }}>
      <Box
        as={Flex}
        justifyContent={"center"}
        width={"100%"}
        // p={{ base: 4, md: 8 }}
        color={"white"}
        gap={2}
      >
        <Text> Join our community for special discounts on selected items</Text>
        |<Text> Subscribe to Newsletter</Text>
      </Box>

      <HStack alignItems={"center"} color={"white"}>
        <Text>Language</Text>
        <IoIosArrowDown />

        <Text>Country </Text>
        <IoIosArrowDown />
      </HStack>
    </Flex>
  );
};

export default TopNav;

// /*
// ----------green color
// #0B320C
// #1F4320

/*

------hero background color
#EDF4EA

*/

// */

// import React from "react";
// import { Flex, Text, Box, Spacer } from "@chakra-ui/react";

// const NavBar = () => {
//   return (
//     <Flex backgroundColor="#0B320C" width="100%" padding="2">
//       <Spacer />
//       <Flex justifyContent="center" alignItems="center" flex="1">
//         <Text marginRight="2">
//           Join our community for special discounts on selected items |
//         </Text>
//         <Text>Subscribe to Newsletter</Text>
//       </Flex>
//       <Flex>
//         <Text marginRight="2">Language</Text>
//         <Text>Country</Text>
//       </Flex>
//     </Flex>
//   );
// };

// export default NavBar;
