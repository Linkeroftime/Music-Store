"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from './components/headbar.js';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        {products.length === 0 ? (
          <div>No products found</div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="relative p-4 shadow-lg rounded-lg border text-center flex flex-col justify-center items-center h-screen">
              <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-auto object-cover max-w-full h-auto rounded-md mx-auto"
              />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-white">
                <h3 className="text-lg font-semibold mt-2 text-black">
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-black">{product.price}</p>
            </div>
          </div>
          ))
        )}
      </div>
  </div>
  );
}