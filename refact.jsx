/*


//----------------vite
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://app.timbu.cloud',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://api.timbu.cloud',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })

// modified app!=api

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://api.timbu.cloud",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

// ---------c;iaI
// import { defineConfig } from "vite";
// import react from "@vitveis plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://api.timbu.cloud",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//         configure: (proxy, _options) => {
//           proxy.on('proxyReq', (proxyReq, req, _res) => {
//             Object.keys(req.headers).forEach(function (key) {
//               proxyReq.setHeader(key, req.headers[key]);
//             });
//           });
//         },
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react"; // This line has been corrected

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://api.timbu.cloud",
//         changeOrigin: true,

//         rewrite: (path) => path.replace(/^\/api/, ""),
//         configure: (proxy, _options) => {
//           proxy.on("proxyReq", (proxyReq, req, _res) => {
//             Object.keys(req.headers).forEach(function (key) {
//               proxyReq.setHeader(key, req.headers[key]);
//             });
//           });
//         },
//       },
//     },
//   },
// });









//----------------products

import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=1&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
      {
        headers: {
          Appid: "R24KSJ5CO7WCO9W",
          Apikey: "c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}, body: ${text}`);
        }
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error('Response was not JSON:', text);
          throw new Error('The server response was not valid JSON');
        }
      })
      .then((data) => {
        setProducts(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;




// --------------brands
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
    //   {/* Popular Brands */
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


//------------check

// // import React from "react";

// // const Check = () => {
// //   const [starWarsData, setStarWarsData] = React.useState({});

// // //   fetch("https://swapi.dev/api/people/1")
// //   fetch("https://app.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654 ")
// //     .then((res) => res.json())
// //     .then((data) => setStarWarsData(data));
// //   return (
// //     <div>
// //       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
// //     </div>
// //   );
// // };

// // export default Check;

// import React, { useState, useEffect } from "react";

// const Check = () => {
//   const [productData, setProductData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const organizationId = '6c3179c6803f48e3876ae866e712175c';
//       const appId = 'R24KSJ5CO7WCO9W';
//       const apiKey = 'c06df05fe6da40f18944772b4c0c2ac920240712160855563654';

//       try {
//         const response = await fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654", {
//             headers: {
//               'Appid': 'R24KSJ5CO7WCO9W',
//               'Apikey': 'c06df05fe6da40f18944772b4c0c2ac920240712160855563654',
//               'Content-Type': 'application/json',
//             }
//           })
//             .then((res) => res.json())
//             .then((data) => setProductData(data))
//             .catch((error) => setError(error.message));

//             // /api/products?organization_id=${organisation_id}&reverse_sort=false&page=2&size=10&Appid=${app_id}&Apikey=${api_key},

//         // fetch(
//         //   `https://app.timbu.cloud/api/v1/products?organization_id=${organizationId}&reverse_sort=false`,
//         //   {
//         //     method: 'GET',
//         //     headers: {
//         //       'Appid': appId,
//         //       'Apikey': apiKey,
//         //       'Content-Type': 'application/json',
//         //     },
//         //   }
//         // );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProductData(data);
//       } catch (e) {
//         setError(e.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) return <div>Error: {error}</div>;
//   if (!productData) return <div>Loading...</div>;

//   return (
//     <div>
//       <pre>{JSON.stringify(productData, null, 2)}</pre>
//     </div>
//   );
// };

// export default Check;

// import React, { useState, useEffect } from "react";

// // const Check = () => {
// //   const [productData, setProductData] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //         try {

// //             const response = await fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10", {
// //                 headers: {
// //                   'Appid': 'R24KSJ5CO7WCO9W',
// //                   'Apikey': 'c06df05fe6da40f18944772b4c0c2ac920240712160855563654',
// //                   'Content-Type': 'application/json',
// //                   'Accept': 'application/json'
// //                 }
// //               });
// //         //   const response = await fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10", {
// //         //     headers: {
// //         //       'Appid': 'R24KSJ5CO7WCO9W',
// //         //       'Apikey': 'c06df05fe6da40f18944772b4c0c2ac920240712160855563654',
// //         //       'Content-Type': 'application/json',
// //         //     }
// //         //   });

// //           const responseText = await response.text(); // Get the response as text
// //           console.log("Full response:", responseText); // Log the full response

// //           if (!response.ok) {
// //             throw new Error(`HTTP error! status: ${response.status}`);
// //           }

// //           // Only try to parse as JSON if it's not an HTML response
// //           if (!responseText.trim().startsWith('<!DOCTYPE')) {
// //             const data = JSON.parse(responseText);
// //             setProductData(data);
// //           } else {
// //             throw new Error("Received HTML instead of JSON");
// //           }
// //         } catch (e) {
// //           setError(e.message);
// //         }
// //       };

// //     // const fetchData = async () => {
// //     //   try {
// //     //     const response = await fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10", {
// //     //       headers: {
// //     //         'Appid': 'R24KSJ5CO7WCO9W',
// //     //         'Apikey': 'c06df05fe6da40f18944772b4c0c2ac920240712160855563654',
// //     //         'Content-Type': 'application/json',
// //     //       }
// //     //     });

// //     //     if (!response.ok) {
// //     //       throw new Error(`HTTP error! status: ${response.status}`);
// //     //     }

// //     //     const data = await response.json();
// //     //     setProductData(data);
// //     //   } catch (e) {
// //     //     setError(e.message);
// //     //   }
// //     // };

// //     fetchData();
// //   }, []);

// //   if (error) return <div>Error: {error}</div>;
// //   if (!productData) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <pre>{JSON.stringify(productData, null, 2)}</pre>
// //     </div>
// //   );
// // };

// export default Check;import React, { useState, useEffect } from "react"

// export default function Check() {
//     const [productData, setProductData] = useState(null)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     "https://api.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654",
//                     {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Accept': 'application/json'
//                         }
//                     }
//                 )

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`)
//                 }

//                 const data = await response.json()
//                 setProductData(data)
//             } catch (e) {
//                 setError(e.message)
//             }
//         }

//         fetchData()
//     }, [])

//     if (error) return <div>Error: {error}</div>
//     if (!productData) return <div>Loading...</div>

//     return (
//         <div>
//             <pre>{JSON.stringify(productData, null, 2)}</pre>
//         </div>
//     )
// }

// import React, { useState } from "react";

// function Check() {
//   const [starWarsData, setStarWarsData] = useState({});

//   // 1. GET the data (fetch)
//   // 2. Save the data to state

//   // fetch("https://swapi.dev/api/people/1")

//   fetch("https://api.timbu.cloud/v1/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654 ")
// //   fetch("https://swapi.dev/api/people/1")
//     .then((res) => res.json())
//     .then((data) => setStarWarsData(data));

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }

// export default Check;

// // https://app.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654




// import React, { useState } from "react";

// function Check() {
//   const [starWarsData, setStarWarsData] = useState({});
 
//   fetch("https://api.timbu.cloud/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654")
//     .then((res) => res.json())
//     .then((data) => setStarWarsData(data));

//   return (
//     <div>
//       <h2>Star Wars Data</h2>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }

// export default Check;

// import React, { useState, useEffect } from "react";

// function Check() {
//   const [timbuData, setTimbuData] = useState({});

//   useEffect(() => {
//     fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => setTimbuData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Timbu Data</h2>
//       <pre>{JSON.stringify(timbuData, null, 2)}</pre>
//     </div>
//   );
// }

// export default Check;






//-----footer
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








//-------------product section

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





// ---------------testimonies
// // import React from 'react';

// // const Testimonies = () => {
// //     return (
// //         <div>
// //             testi
// //         </div>
// //     );
// // }

// // export default Testimonies;



// import React from "react";
// import { Box, Text, Flex, VStack, HStack, Quote } from "@chakra-ui/react";
// import { BiSolidQuoteAltLeft } from "react-icons/bi";


// const Testimonies = () => {
//   const stats = [
//     { value: "15k+", label: "Outlets Worldwide" },
//     { value: "2M+", label: "Satisfied Customers" },
//     { value: "9M+", label: "Footwears Sold" },
//   ];

//   const testimonials = [
//     {
//       quote: "As a sneakerhead, Archies has really helped me realize my dream of owning a collection of various shoes. Great Collection. Truly love it!",
//       author: "Andre",
//     },
//     {
//       quote: "I recently ran about 25 pairs of sneakers and I bought them all from Archies, I will always get my sneaker here. 5 stars...",
//       author: "Pete",
//     },
//     {
//       quote: "For more than two years whenever I go to Archies, they're very considerate and friendly...",
//       author: "Hendy",
//     },
//   ];

//   return (
//     <Box maxW="container.xl" mx="auto" py={8}>
//       <HStack justifyContent="space-between" mb={8}>
//         {stats.map((stat, index) => (
//           <VStack key={index} align="center">
//             <Text fontSize="3xl" fontWeight="bold">
//               {stat.value}
//             </Text>
//             <Text fontSize="sm" color="gray.600">
//               {stat.label}
//             </Text>
//           </VStack>
//         ))}
//       </HStack>

//       <Box mb={6}>
//         <Text fontSize="2xl" fontWeight="bold">
//           What Our Customers Say
//         </Text>
//       </Box>

//       <Flex justifyContent="space-between">
//         {testimonials.map((testimonial, index) => (
//           <Box
//             key={index}
//             bg="green.100"
//             p={4}
//             borderRadius="md"
//             maxW="30%"
//           >
//             <Quote fontSize="sm" mb={2}>
//               {testimonial.quote}
//             </Quote>
//             <Text fontWeight="bold" textAlign="right">
//               - {testimonial.author}
//             </Text>
//           </Box>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default Testimonies;













// -----------top nav

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

