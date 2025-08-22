"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center">Loading...</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace this with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    toast.success("Product added successfully!");
    setForm({ name: "", description: "", price: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
      <Toaster />
    </div>
  );
}
