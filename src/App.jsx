import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_URL = "https://products-api-express.onrender.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container-fluid" >
      <h1 className="text-center">🛍️ Our Products</h1>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-danger text-center">Error: {error}</p>}

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">💰 Price: ₹{product.price}</p>
              <button className="btn btn-success">Add To Cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
