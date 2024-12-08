"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function AsgardSofa() {
  const [selectedColor, setSelectedColor] = useState("gold");
  const [selectedSize, setSelectedSize] = useState("L");

  const colors = ["gold", "purple", "black"];
  const sizes = ["L", "XL", "XS"];
  const relatedProducts = [
    { name: "Slytherine", price: "Rp 2,500,000", image: "/syltherine.png", discount: "30%" },
    { name: "Leviosa", price: "Rp 2,500,000", image: "/leviosa.png" },
    { name: "Lolito", price: "Rp 7,000,000", image: "/lolito.png", discount: "50%" },
    { name: "Respira", price: "Rp 500,000", image: "/respira.png", tag: "New" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-gray-600 mb-6">
        <a href="/" className="hover:underline">Home</a> &gt; <a href="/shop" className="hover:underline">Shop</a> &gt; Asgaard Sofa
      </nav>

      {/* Product Section */}
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <div className="flex mt-4 space-x-4">
          <img src="/asgard-side.png.png" alt="Asgaard Side" width={100} height={800} className="rounded-lg cursor-pointer" />

            <img src="/asgaard-sofa.jpg.png" alt="Asgaard Sofa" width={600} height={300} className=" rounded-lg cursor-pointer" />
          </div>
          <Link href="/compare"></Link>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Asgaard Sofa</h1>
          <p className="text-xl text-primary font-semibold mb-2">Rs. 250,000.00</p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.846 1.51 8.263L12 18.899l-7.446 4.377 1.51-8.263-6.064-5.846 8.332-1.151z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">(5 Reviews)</span>
          </div>
          <p className="text-gray-600 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Asgaard Sofa combines design and comfort, perfect for any home.
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${selectedSize === size ? "bg-primary text-white" : "bg-gray-100"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Color</h4>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-primary" : "border-gray-200"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-yellow-600">
                Add To Cart</button>
                <Link href="/cart"></Link>

            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100">Compare</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600">
          The Asgaard Sofa is compact yet stylish, featuring a well-balanced design perfect for any modern living space. Made with high-quality materials, it ensures durability and elegance.
        </p>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <div key={index} className="border rounded-lg p-4">
              <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-primary font-bold">{product.price}</p>
              {product.discount && <span className="text-red-500">{product.discount}</span>}
              {product.tag && <span className="text-green-500">{product.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
