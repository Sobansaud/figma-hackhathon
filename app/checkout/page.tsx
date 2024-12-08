

// pages/checkout.js
import React from 'react';

import Image from "next/image";

export default function Checkout() {
  return (

    <div className="min-h-screen bg-gray-100 py-10">
         <div className="bg-[url('/pic1.png')] bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800"></h1>
      </div>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section - Billing Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                  Street Address*
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                  Apartment, floor, etc. (Optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Town/City*
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="saveInfo"
                  type="checkbox"
                  className="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          <div className="p-8 bg-white border rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

  {/* Product Details */}
  <div className="mb-6">
    <div className="flex justify-between">
      <span className="text-gray-700 font-medium">Product</span>
      <span className="text-gray-700 font-medium">Assgard Sofa</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Quantity</span>
      <span className="text-gray-500">1</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Price</span>
      <span className="text-gray-500">$1200</span>
    </div>
  </div>

  <hr className="border-gray-300 mb-6" />

  {/* Payment Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">Direct Bank Transfer</h3>
    <p className="text-sm text-gray-600 mb-4">
    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>
    <div className="space-y-3">
      <div className="flex items-center">
        <input
          id="bank"
          type="radio"
          name="paymentMethod"
          className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500"
        />
        <label htmlFor="bank" className="ml-2 text-sm text-gray-700">
          Bank Transfer
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="cod"
          type="radio"
          name="paymentMethod"
          className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500"
        />
        <label htmlFor="cod" className="ml-2 text-sm text-gray-700">
          Cash on Delivery
        </label>
      </div>
    </div>
  </div>

  <p className="text-sm text-gray-600 mb-6">
  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
  </p>

  {/* Place Order Button */}
  <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none">
    Place Order
  </button>
</div>
</div>
<img src="nero.png.png"
      alt="all"
      width={2000}
      height={700}>
      </img>
</div>
</div>)}
