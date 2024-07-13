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

import React, { useState, useEffect } from "react";

function Check() {
  const [timbuData, setTimbuData] = useState({});

  useEffect(() => {
    fetch("/api/products?organization_id=6c3179c6803f48e3876ae866e712175c&reverse_sort=false&page=2&size=10&Appid=R24KSJ5CO7WCO9W&Apikey=c06df05fe6da40f18944772b4c0c2ac920240712160855563654")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setTimbuData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Timbu Data</h2>
      <pre>{JSON.stringify(timbuData, null, 2)}</pre>
    </div>
  );
}

export default Check;