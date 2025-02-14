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
  const [visibleProducts, setVisibleProducts] = useState(24);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=134").then((res) => {
      setProduct(res.data.products);
      setFilteredProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    let filtered = [...product];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 24);
  };

  const hideProducts = () => {
    setVisibleProducts(24);
  };

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setSortBy={setSortBy}
        setSortByPrice={setSortByPrice}
        setSortByRating={setSortByRating}
      />
      <div className="container">
        <Cards products={filteredProducts.slice(0, visibleProducts)} />
        {visibleProducts < filteredProducts.length ? (
          <button onClick={loadMoreProducts} className="show-more">
            Show more 24x
          </button>
        ) : (
          visibleProducts > 24 && (
            <button onClick={hideProducts} className="hide">
              Hide to 24x
            </button>
          )
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
