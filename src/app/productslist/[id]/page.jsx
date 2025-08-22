"use client";
import { useEffect, useState } from "react";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 dark:border-blue-400"></div>
      </div>
    );
  }

  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded shadow-md mt-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-60 mx-auto object-contain"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-3">${product.price}</p>
      <p className="mt-2 italic text-sm text-gray-500 dark:text-gray-400">
        Category: {product.category}
      </p>
    </div>
  );
}
