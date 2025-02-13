import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data.products);
    });
  }, []);
  console.log(product);

  return (
    <>
      <Header />
      <div className="container">
        <Cards />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
