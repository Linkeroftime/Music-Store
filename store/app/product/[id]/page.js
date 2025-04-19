"use client"
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Headbar from "../../components/headbar.js";
import { useRouter } from "next/navigation";



export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Fetch product data based on the product ID in the URL
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    };

      fetchProduct();
    }, [params.id]);

    const handleAddToCart = () => {
      if (product) {
        addToCart(product);
        router.push("/cart")
      }
    };

    if (!product) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <Headbar />
      <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
      </div>
    </div>
  );
}