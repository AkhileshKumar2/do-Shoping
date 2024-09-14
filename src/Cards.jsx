import { useEffect, useState } from "react";
import "./Cards.css";
const Cards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{product.description}</p>
            <p className="card-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
