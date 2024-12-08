

import React from "react";
import Image from "next/image"
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#FCF8F3]">
      {/* Hero Section */}
      <div className="bg-[url('/contact.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800"></h1>
      </div>

      {/* Contact Form Section */}
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Address Details */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6">
              For more information about our products or services, feel free to
              drop us an email or give us a call. We're here to help!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Address:</strong> 236 5th St Ave, New York, NY
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Phone:</strong> (+84) 546-8798
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaClock className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Working Hours:</strong> Mon-Fri 9am - 5pm
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 p-6 bg-white border rounded-md shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-2 rounded-md"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border p-2 rounded-md"
              ></textarea>
              <button className="bg-[#B88E2F] text-white w-full p-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <img src="nero.png.png"
      alt="all"
      width={2000}
      height={300}>
      </img>

      {/* Footer Section */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
