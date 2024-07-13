// import React from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Image,
//   Flex,
//   Text,
//   Button,
//   Wrap,
//   WrapItem,
//   Center,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
// } from "@chakra-ui/react";

// import adidas from "../assets/Images/adidas.png";
// import converse from "../assets/Images/converse.png";
// import fila from "../assets/Images/fila.png";
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
//   { id: 1, name: "Feather Step Classic", price: 259.99, image: featherStep },
//   { id: 2, name: "Retro Air Glide", price: 199.99, image: retroAir },
//   { id: 3, name: "New Balance Urban", price: 179.99, image: new_balancee },
//   { id: 4, name: "Adidas ZX Comfort", price: 149.99, image: adidasZX },
//   { id: 5, name: "Retro Adidas Sprint", price: 229.99, image: retroAdidas },
// ];

// const Brands = () => {
//   return (
//     <Container maxW="container.xl" py={8}>
//       {/* Popular Brands */}
//       <Box mb={8}>
//         <Heading as="h2" size="lg" mb={4} color={"black"} textAlign={"left"}>
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
//                 alt="converse"
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
//                 alt="vans"
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
//                 alt="oasis"
//                 maxW="80%"
//                 maxH="80%"
//                 objectFit="contain"
//               />
//             </Center>
//           </WrapItem>
//         </Wrap>
//       </Box>

//       {/* Best Deals Today */}
//       <Box>
//         <Heading as="h2" size="lg" mb={2} color={"black"}  textAlign={"left"}>
//           Best Deals Today
//         </Heading>

//         <Flex
//           flexWrap={{ base: "wrap", md: "nowrap" }}
//           justifyContent="space-between"
//           gap={2}
//         >
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               backgroundColor="white"
//               maxW={{ base: "100%", sm: "180px" }}
//               w="100%"
//             >
//               <CardBody color="black" py={2}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   borderRadius="lg"
//                 />
//                 <Text fontSize="sm" mt={1}>
//                   {product.name}
//                 </Text>
//                 <Text fontSize="sm" fontWeight="bold">
//                   ${product.price.toFixed(2)}
//                 </Text>
//               </CardBody>
//               <CardFooter pt={0} pb={2} width={"70%"}>
//                 <Button
//                   variant="outline"
//                   color={"grey"}
//                   size="sm"
//                   borderWidth={"1px"}
//                   borderColor={"grey"}
//                 >
//                   Add to cart
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </Flex>
//         <Divider my={16} borderColor="gray.300" borderWidth="1px" />
//       </Box>
//     </Container>
//   );
// };

// export default Brands;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Image,
//   Flex,
//   Text,
//   Button,
//   Wrap,
//   WrapItem,
//   Center,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Spinner,
// } from "@chakra-ui/react";

// const Brands = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.data); // Assuming the API returns an array of products in the 'data' field
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (error) {
//     return (
//       <Center h="100vh">
//         <Text color="red.500">Error: {error}</Text>
//       </Center>
//     );
//   }

//   return (
//     <Container maxW="container.xl" py={8}>
//       {/* Popular Brands section remains unchanged */}

//       {/* Best Deals Today */}
//       <Box>
//         <Heading as="h2" size="lg" mb={2} color={"black"} textAlign={"left"}>
//           Best Deals Today
//         </Heading>

//         <Flex
//           flexWrap={{ base: "wrap", md: "nowrap" }}
//           justifyContent="space-between"
//           gap={2}
//         >
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               backgroundColor="white"
//               maxW={{ base: "100%", sm: "180px" }}
//               w="100%"
//             >
//               <CardBody color="black" py={2}>
//                 <Image
//                   src={product.image_url} // Assuming the API provides an image_url
//                   alt={product.name}
//                   borderRadius="lg"
//                 />
//                 <Text fontSize="sm" mt={1}>
//                   {product.name}
//                 </Text>
//                 <Text fontSize="sm" fontWeight="bold">
//                   ${parseFloat(product.price).toFixed(2)}
//                 </Text>
//               </CardBody>
//               <CardFooter pt={0} pb={2} width={"70%"}>
//                 <Button
//                   variant="outline"
//                   color={"grey"}
//                   size="sm"
//                   borderWidth={"1px"}
//                   borderColor={"grey"}
//                 >
//                   Add to cart
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </Flex>
//         <Divider my={16} borderColor="gray.300" borderWidth="1px" />
//       </Box>
//     </Container>
//   );
// };

// export default Brands;

// ---------before accessing the accurate api
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Image,
//   Flex,
//   Text,
//   Button,
//   Wrap,
//   WrapItem,
//   Center,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Spinner,
// } from "@chakra-ui/react";

// import adidas from "../assets/Images/adidas.png";
// import converse from "../assets/Images/converse.png";
// import fila from "../assets/Images/fila.png";
// import nike from "../assets/Images/nike.png";
// import reebok from "../assets/Images/reebok.png";
// import puma from "../assets/Images/puma.png";
// import new_balance from "../assets/Images/new_balance.png";
// import vans from "../assets/Images/vans.png";
// import oasis from "../assets/Images/oasis.png";

// const Brands = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(
//       "/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654"
//     )
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           throw new Error("API response does not contain an array of products");
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Container maxW="container.xl" py={8}>
//       <Box mb={8}>
//         <Heading as="h2" size="lg" mb={4} color={"black"} textAlign={"left"}>
//           Popular Brands
//         </Heading>

//         <Wrap spacing="20px">
//           {[
//             adidas,
//             nike,
//             puma,
//             fila,
//             new_balance,
//             reebok,
//             converse,
//             vans,
//             oasis,
//           ].map((brand, index) => (
//             <WrapItem key={index}>
//               <Center w="80px" h="80px">
//                 <Image
//                   src={brand}
//                   alt={`Brand ${index + 1}`}
//                   maxW="80%"
//                   maxH="80%"
//                   objectFit="contain"
//                 />
//               </Center>
//             </WrapItem>
//           ))}
//         </Wrap>
//       </Box>

//       <Box>
//         <Heading as="h2" size="lg" mb={2} color={"black"} textAlign={"left"}>
//           Best Deals Today
//         </Heading>
//         {loading ? (
//           <Center h="200px">
//             <Spinner size="xl" />
//           </Center>
//         ) : error ? (
//           <Center h="200px">
//             <Text color="red.500">Error: {error}</Text>
//           </Center>
//         ) : products.length === 0 ? (
//           <Center h="200px">
//         console.log("product:", page);

//             <Text>No products available.</Text>
//           </Center>
//         ) : (
//           <Flex
//             flexWrap={{ base: "wrap", md: "nowrap" }}
//             justifyContent="space-between"
//             gap={2}
//           >
//             {products.map((product) => (
//               <Card
//                 key={product.id}
//                 backgroundColor="white"
//                 maxW={{ base: "100%", sm: "180px" }}
//                 w="100%"
//               >
//                 <CardBody color="black" py={2}>
//                   <Image
//                     src={product.image_url}
//                     alt={product.name}
//                     borderRadius="lg"
//                   />
//                   <Text fontSize="sm" mt={1}>
//                     {product.name}
//                   </Text>
//                   <Text fontSize="sm" fontWeight="bold">
//                     ${parseFloat(product.price).toFixed(2)}
//                   </Text>
//                 </CardBody>
//                 <CardFooter pt={0} pb={2} width={"70%"}>
//                   <Button
//                     variant="outline"
//                     color={"grey"}
//                     size="sm"
//                     borderWidth={"1px"}
//                     borderColor={"grey"}
//                   >
//                     Add to cart
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </Flex>
//         )}
//         <Divider my={16} borderColor="gray.300" borderWidth="1px" />
//       </Box>
//     </Container>
//   );
// };

// export default Brands;

import React, { useState, useEffect } from "react";
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
  Divider,
  Spinner,
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
import UseProducts from "./UseProducts";

// const Brands = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.items);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

// ---------http error
// const Brands = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//       const apiUrl = 'https://api.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654';

//       fetch(proxyUrl + apiUrl , { mode: 'no-cors' })
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data); // Log the response data
//           setProducts(data.items || []);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setError(error.message);
//           setLoading(false);
//         });
//     }, []);
// --------------------- updated
const Brands = () => {


const {products, loading, error} = UseProducts();

  //   let's use use product and lift our api calls

  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch(
  //       "/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
  //       {
  //         headers: {
  //           Appid: "R24KSJ5CO7WCO9W",
  //           Apikey: "c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status: ${res.status}`);
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data); // Log the response data
  //         setProducts(data.items || []);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);

  //   let's use use product and lift our api calls
  //   useEffect(() => {
  //     fetch(
  //       "/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=1&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
  //       {
  //         headers: {
  //           Appid: "R24KSJ5CO7WCO9W",
  //           Apikey: "c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         console.log("Response status:", res.status);
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status: ${res.status}`);
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log("Full API response:", data);
  //         console.log("Items array:", data.items);
  //         setProducts(data.items || []);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Detailed error:", error);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);

  //   const image = items.photos[0].url
  // <img src={https://api.timbu.cloud/images/${image}} />

  return (
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

export default Brands;
