"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4") // fetch only 4 products for highlights
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      

      {/* Product Highlights */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Link
                href={`/productslist/${product.id}`}
                className="mt-3 inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
