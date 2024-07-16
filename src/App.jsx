import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TopNav from "./components/TopNav";
import Brands from "./components/Brands";
import ProductSection from "./components/ProductSection";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Testimonies from "./components/Testimonies";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Box display={{ base: "none", md: "block" }}>
            <TopNav />
          </Box>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/product" element={<ProductSection />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/testimonies" element={<Testimonies />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/product_detail" element={<ProductDetail />} />
              <Route path="/cart_page" element={<CartPage />} />
            </Routes>
          </main>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
