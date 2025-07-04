import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export function ProductList() {
  var category = "womens-dresses";
  var limit = 20;
  var apiUrl = `https://dummyjson.com/products/category/${category}category}?limit=${limit}&select=id,thumbnail,title,price,description`;
//https://dummyjson.com/products/category/womens-dresses?limit=20&select=id,thumbnail,price,title,description
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts () {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
setTimeout(() => {
    fetchProducts();
    
  }, []);  
  return (
    <div className={styles.container}>
      <h1>TRJ Megastore</h1>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.thumbnail}
          />
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
        </div>
      ))}
      {loading && (
        <div>
          <CircularProgress
            // size="md"
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{
              color: " #000000",
            }}
          />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}
