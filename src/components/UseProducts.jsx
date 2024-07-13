import { useState, useEffect } from 'react';

const UseProducts = () => {
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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
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

export default UseProducts;