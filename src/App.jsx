import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("A-Z");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [sortByRating, setSortByRating] = useState("asc");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data.products);
      setFilteredProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    let filtered = product.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === "A-Z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Z-A") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sortByPrice === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sortByRating === "asc") {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (sortByRating === "desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, sortBy, sortByPrice, sortByRating, product]);

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setSortBy={setSortBy}
        setSortByPrice={setSortByPrice}
        setSortByRating={setSortByRating}
      />
      <div className="container">
        <Cards products={filteredProducts} />
      </div>
      <Footer />
    </>
  );
}

export default App;