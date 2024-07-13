// import React from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Image,
//   Flex,
//   Text,
//   Button,
//   Icon,
//   Wrap,
//   WrapItem,
//   Center,
//   SimpleGrid,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";

// import adidas from "../assets/Images/adidas.png";
// import converse from "../assets/Images/converse.png";
// import fila from "../assets/Images/fila.png";
// // import foot from "../assets/Images/foot.png";
// import nike from "../assets/Images/nike.png";
// import reebok from "../assets/Images/reebok.png";
// import puma from "../assets/Images/puma.png";
// import new_balance from "../assets/Images/new_balance.png";
// import vans from "../assets/Images/vans.png";
// import oasis from "../assets/Images/oasis.png";
// import featherStep from "../assets/Images/featherStep.png";
// import retroAir from "../assets/Images/retroAir.png";
// import new_balancee from "../assets/Images/new_balancee.png";
// import adidasZX from "../assets/Images/adidasZX.png";
// import retroAdidas from "../assets/Images/retroAdidas.png";

// const products = [
//     { id: 1, name: "Feather Step Classic", price: 259.99, image: image1 },
//     { id: 2, name: "Air Glide Pro", price: 199.99, image: image2 },
//     { id: 3, name: "Urban Strider", price: 179.99, image: image3 },
//     { id: 4, name: "Comfort Flex", price: 149.99, image: image4 },
//     { id: 5, name: "Sprint Elite", price: 229.99, image: image5 },
// ]
// const PopularBrandsAndDeals = () => {
//   return (
//     <Container maxW="container.xl" py={8}>
//       {/* Popular Brands */}
//       <Box mb={8}>
//         <Heading as="h2" size="lg" mb={4}>
//           Popular Brands
//         </Heading>

//         <Wrap spacing="20px">
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={adidas}
//                 alt="Adidas"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={nike}
//                 alt="Nike"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={puma}
//                 alt="puma"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={fila}
//                 alt="fila"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={new_balance}
//                 alt="new_balance"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={reebok}
//                 alt="reebok"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={converse}
//                 alt="reebok"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={vans}
//                 alt="reebok"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//           <WrapItem>
//             <Center w="80px" h="80px">
//               <Image
//                 src={oasis}
//                 alt="reebok"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//         </Wrap>
//         {/* <Icon
//           as={ChevronRightIcon}
//           boxSize={6}
//           color="gray.400"

//           position="absolute"
//           right="-8px"
//           top="50%"
//           transform="translateY(-50%)"
//         /> */}
//       </Box>

//       {/* Best Deals Today */}
//       <Box>
//         <Heading as="h2" size="lg" mb={2}>
//           Best Deals Today
//         </Heading>

//         <Flex
//           flexWrap={{ base: "wrap", md: "nowrap" }}
//           justifyContent="space-between"
//           gap={2}
//         >
//           {[1, 2, 3, 4, 5].map((item) => (
//             <Card
//               key={item}
//               backgroundColor="white"
//               maxW={{ base: "100%", sm: "180px" }}
//               w="100%"
//             >
//               <CardBody color="black" py={2}>
//                 <Image
//                   src={featherStep}
//                   alt="Green double couch with wooden legs"
//                   borderRadius="lg"
//                 />
//                 <Text fontSize="sm" mt={1}>
//                   Feather Step Classic
//                 </Text>
//                 <Text fontSize="sm" fontWeight="bold">
//                   $259.99
//                 </Text>
//               </CardBody>
//               <CardFooter pt={0} pb={2} width={"70%"} >
//                 <Button variant="outline" color={"grey"} size="sm" borderWidth={"1px"}  borderColor={"grey"} >
//                   Add to cart
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </Flex>
//       </Box>
//     </Container>
//   );
// };

// export default PopularBrandsAndDeals;

import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  Text,
  Button,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  CardFooter,
  Spinner,
  Divider,
} from "@chakra-ui/react";

import adidas from "../assets/Images/adidas.png";
import converse from "../assets/Images/converse.png";
import fila from "../assets/Images/fila.png";
import nike from "../assets/Images/nike.png";
import reebok from "../assets/Images/reebok.png";
import puma from "../assets/Images/puma.png";
import new_balance from "../assets/Images/new_balance.png";
import vans from "../assets/Images/vans.png";
import oasis from "../assets/Images/oasis.png";
import featherStep from "../assets/Images/featherStep.png";
import retroAir from "../assets/Images/retroAir.png";
import new_balancee from "../assets/Images/new_balancee.png";
import adidasZX from "../assets/Images/adidasZX.png";
import retroAdidas from "../assets/Images/retroAdidas.png";
import { Link } from "react-router-dom";
import UseProducts from "./UseProducts";

// const products = [
//   { id: 1, name: "Feather Step Classic", price: 259.99, image: featherStep },
//   { id: 2, name: "Retro Air Glide", price: 199.99, image: retroAir },
//   { id: 3, name: "New Balance Urban", price: 179.99, image: new_balancee },
//   { id: 4, name: "Adidas ZX Comfort", price: 149.99, image: adidasZX },
//   { id: 5, name: "Retro Adidas Sprint", price: 229.99, image: retroAdidas },
// ];

const ProductSection = () => {
  const { products, loading, error } = UseProducts();
  return (
    // <Container maxW="container.xl"  >

    //   {/* Best Deals Today */}
    //   <Box>
    //     <Heading as="h2" size="lg" mb={2} color={"black"}  textAlign={"left"}>
    //      Top Products
    //     </Heading>

    //     <Flex
    //       flexWrap={{ base: "wrap", md: "nowrap" }}
    //       justifyContent="space-between"
    //       gap={2}
    //     >
    //       {products.map((product) => (
    //         <Card
    //           key={product.id}
    //           backgroundColor="white"
    //           maxW={{ base: "100%", sm: "180px" }}
    //           w="100%"
    //         >
    //           <CardBody color="black" py={2}>
    //             <Image
    //               src={product.image}
    //               alt={product.name}
    //               borderRadius="lg"
    //             />
    //             <Text fontSize="sm" mt={1}>
    //               {product.name}
    //             </Text>
    //             <Text fontSize="sm" fontWeight="bold">
    //               ${product.price.toFixed(2)}
    //             </Text>
    //           </CardBody>
    //           <CardFooter pt={0} pb={2} width={"70%"}>
    //             <Link to="/cart_page">
    //                 <Button
    //                   variant="outline"
    //                   color={"grey"}
    //                   size="sm"
    //                   borderWidth={"1px"}
    //                   borderColor={"grey"}
    //                 >
    //                   Add to cart
    //                 </Button>
    //             </Link>
    //           </CardFooter>
    //         </Card>
    //       ))}
    //     </Flex>
    //   </Box>
    // </Container>

    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color={"black"} textAlign={"left"}>
          Popular Brands
        </Heading>

        <Wrap spacing="20px">
          {[
            adidas,
            nike,
            puma,
            fila,
            new_balance,
            reebok,
            converse,
            vans,
            oasis,
          ].map((brand, index) => (
            <WrapItem key={index}>
              <Center w="80px" h="80px">
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  maxW="80%"
                  maxH="80%"
                  objectFit="contain"
                />
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2} color={"black"} textAlign={"left"}>
          Best Deals Today
        </Heading>

        {/* intial loading.... */}
        {/* {loading ? (
        <Center h="200px">
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Center h="200px">
          <Text color="red.500">Error: {error}</Text>
        </Center>
      ) : products.length === 0 ? (
        <Center h="200px">
          <Text>No products available.</Text>
        </Center>
      ) : (
        <Flex
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent="space-between"
          gap={2}
        >
          {products.map((product) => (
              // console.log("products: ", product.id)
            <Card
              key={product.id}
              backgroundColor="white"
              maxW={{ base: "100%", sm: "180px" }}
              w="100%"
            >
              console.log("products: ", product.id);
              <CardBody color="black" py={2}>
                <Image
                  // src={product.image_url}
                  // alt={product.name}
                  // borderRadius="lg"

                  // src={`https://api.timbu.cloud/images/${product.photos?.[0]?.url}`}
                  src={`https://api.timbu.cloud/images/${image}`}
                  alt={product.name}
                  borderRadius="lg"
                  fallbackSrc="https://via.placeholder.com/150"
                />
                <Text fontSize="sm" mt={1}>
                  {product.name}
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  ${parseFloat(product.price).toFixed(2)}
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
          ))}
        </Flex>
      )} */}

        {/* ------------------ */}

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
          <Flex
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justifyContent="space-between"
            gap={2}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                backgroundColor="white"
                maxW={{ base: "100%", sm: "180px" }}
                w="100%"
              >
                <CardBody color="black" py={2}>
                  <Image
                    src={`https://api.timbu.cloud/images/${product.photos?.[0]?.url}`}
                    alt={product.name}
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                  <Text fontSize="sm" mt={1}>
                    {product.name || "No name"}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold" textAlign={"inherit"}>
                    {/* ${parseFloat(product.price)?.toFixed(2) || "No price"} */}
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
            ))}
          </Flex>
        )}

        <Divider my={16} borderColor="gray.300" borderWidth="1px" />
      </Box>
    </Container>
  );
};

export default ProductSection;
