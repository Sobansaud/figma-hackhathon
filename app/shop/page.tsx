




"use client";
import { useCart } from "@/components/CartContext"

import { useState } from "react";
import Link from "next/link";


const products = [
  { name: "Asgaard Sofa", price: "Rs. 250,000", image: "/asgaard-sofa.jpg.png", badge: null },
  { name: "Syltherine", price: "Rp 2.500.000", discount: "-30%", oldPrice: "Rp 3.500.000", image: "/syltherine.png", badge: null },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/pop.png.png", badge: null },
  { name: "Lolito", price: "Rp 7.000.000", discount: "-50%", oldPrice: "Rp 14.000.000", image: "/lolito.png", badge: null },
  { name: "Respira", price: "Rp 500.000", image: "/respira.png", badge: "New" },
  { name: "Syltherine", price: "Rp 2.500.000", discount: "-30%", oldPrice: "Rp 3.500.000", image: "/syltherine.png", badge: null },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/pop.png.png", badge: null },
  { name: "Lolito", price: "Rp 7.000.000", discount: "-50%", oldPrice: "Rp 14.000.000", image: "/lolito.png", badge: null },
  { name: "Respira", price: "Rp 500.000", image: "/respira.png", badge: "New" },
  { name: "Syltherine", price: "Rp 2.500.000", discount: "-30%", oldPrice: "Rp 3.500.000", image: "/syltherine.png", badge: null },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/leviosa.png", badge: null },
  { name: "Lolito", price: "Rp 7.000.000", discount: "-50%", oldPrice: "Rp 14.000.000", image: "/lolito.png", badge: null },
  { name: "Respira", price: "Rp 500.000", image: "/respira.png", badge: "New" },
  { name: "Syltherine", price: "Rp 2.500.000", discount: "-30%", oldPrice: "Rp 3.500.000", image: "/syltherine.png", badge: null },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/leviosa.png", badge: null },
  { name: "Lolito", price: "Rp 7.000.000", discount: "-50%", oldPrice: "Rp 14.000.000", image: "/lolito.png", badge: null },
  { name: "Respira", price: "Rp 500.000", image: "/respira.png", badge: "New" },
  { name: "Syltherine", price: "Rp 2.500.000", discount: "-30%", oldPrice: "Rp 3.500.000", image: "/syltherine.png", badge: null },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/leviosa.png", badge: null },
  { name: "Lolito", price: "Rp 7.000.000", discount: "-50%", oldPrice: "Rp 14.000.000", image: "/lolito.png", badge: null },
  { name: "Respira", price: "Rp 500.000", image: "/respira.png", badge: "New" },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const {  } = useCart();

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-[url('/shop.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white"></h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden group relative">
              {/* Product Image */}
              <Link href="/asgard">
            
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                
              </Link>
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => {
                      (product); // Add product to the cart
                    }}
                    className="px-4 py-2 bg-gray-800 text-white text-sm rounded shadow hover:bg-gray-900"
                  >
                    Add to Cart
                  </button>
                  {/* Link to Cart */}
                  <Link href="/cart" ></Link>
               {/* className="px-4 py-2 bg-blue-500 text-white text-sm rounded shadow hover:bg-blue-600">
  Go to Cart</Link> */}


                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 ${
                currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r"
          >
            Next
          </button>
        </div>
      </main>
          <img src='nero.png.png' alt='all' width={2000} height={200}></img>

    </div>
  );
};

export default Shop;