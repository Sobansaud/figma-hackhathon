



import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Forth = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mt-4">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {["for1.png", "3img.jpg", "for3.png", "for4.png"].map((src, index) => (
          <Image key={index} height={150} width={150} alt={`Product ${index}`} src={`/${src}`} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {["for5.png", "for6.png", "for7.png", "for8.png"].map((src, index) => (
          <Image key={index} height={150} width={150} alt={`Product ${index}`} src={`/${src}`} />
        ))}
      </div>
      <div className="mt-5">
        <Button className="text-[#B88E2F] bg-white border border-[#B88E2F] rounded">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default Forth;


