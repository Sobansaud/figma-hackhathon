

import Image from 'next/image';
import images from "../public/asgaard-sofa.jpg.png"
export default function ProductComparison() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Go to Product page for more Products</h1>
            <a href="/shop" className="text-blue-500 underline">View More</a>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Add A Product</button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <Image src="/asgaard-sofa.jpg.png" alt="Asgaard Sofa" width={600} height={150} />
            <h2 className="text-xl font-semibold">Asgaard Sofa</h2>
            <p className="text-gray-600">Rs. 250,000.00</p>
            <p className="text-yellow-500">4.7 ⭐ (204 Reviews)</p>
          </div>
          <div className="text-center">
            <Image src="/outdoor-sofa-set.jpg.png" alt="Outdoor Sofa Set" width={600} height={150} />
            <h2 className="text-xl font-semibold">Outdoor Sofa Set</h2>
            <p className="text-gray-600">Rs. 224,000.00</p>
            <p className="text-yellow-500">4.2 ⭐ (143 Reviews)</p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto p-4 overflow-x-auto">
      <table className="min-w-full border-collapse">
  <thead>
    <tr>
      <th  className="border border-gray-600 px-4 py-2 text-lg font-bold bg-gray-100">General</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Sales Package</td>
      <td className="border border-gray-600 px-4 py-2">1 sectional sofa</td>
      <td className="border border-gray-600 px-4 py-2">1 Three Seater, 2 Single Seater</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Model Number</td>
      <td className="border border-gray-600 px-4 py-2">TFCBL1GRBL6SRHS</td>
      <td className="border border-gray-600 px-4 py-2">DTUBLGRBL568</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Secondary Material</td>
      <td className="border border-gray-600 px-4 py-2">Solid Wood</td>
      <td className="border border-gray-600 px-4 py-2">Solid Wood</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px -4 py-2 font-semibold">Configuration</td>
      <td className="border border-gray-600 px -4 py-2">L-shaped</td>
      <td className="border border-gray-600 px -4 py-2">L-shaped</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Upholstery Material</td>
      <td className="border border-gray-600 px-4 py-2">Fabric + Cotton</td>
      <td className="border border-gray-600 px-4 py-2">Fabric + Cotton</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Upholstery Color</td>
      <td className="border border-gray-600 px-4 py-2">Bright Grey & Lion</td>
      <td className="border border-gray-600 px-4 py-2">Bright Grey & Lion</td>
    </tr>
  </tbody>

  <thead>
    <tr>
      <th  className="border border-gray-600 px-4 py-2 text-lg font-bold bg-gray-100">Product</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Filling Material</td>
      <td className="border border-gray-600 px-4 py-2">Foam</td>
      <td className="border border-gray-600 px-4 py-2">Matte</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Finish Type</td>
      <td className="border border-gray-600 -4 py-2">Bright Grey & Lion</td>
      <td className="border border-gray-600 px-4 py-2">Bright Grey & Lion</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Adjustable Headrest</td>
      <td className="border border-gray-600 px-4 py-2">No</td>
      <td className="border border-gray-600 px-4 py-2">Yes</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Maximum Load Capacity</td>
      <td className="border border-gray-600 px-4 py-2">280 KG</td>
      <td className="border border-gray-600 px-4 py-2">300 KG</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Origin of Manufacture</td>
      <td className="border border-gray-600 px-4 py-2">India</td>
      <td className="border border-gray-600 px-4 py-2">India</td>
    </tr>
  </tbody>

  <thead>
    <tr>
      <th  className="border border-gray- -4 py-2 text-lg font-bold bg-gray-100">Dimensions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Width</td>
      <td className="border border-gray-600 px-4 py-2">265.32 cm</td>
      <td className="border border-gray-600 px-4 py-2">265.32 cm</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Height</td>
      <td className="border border-gray-600 px-4 py-2">76 cm</td>
      <td className="border border-gray-600  px-4 py-2">76 cm</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Depth</td>
      <td className="border border-gray-600 px-4 py-2">167.76 cm</td>
      <td className="border border-gray-600 px-4 py-2">167.76 cm</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Weight</td>
      <td className="border border-gray-600 px-4 py-2">45 KG</td>
      <td className="border border-gray-600 px-4 py-2">65 KG</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Seat Height</td>
      <td className="border border-gray-600 px-4 py-2">41.52 cm</td>
      <td className="border border-gray-600 px-4 py-2">41.52 cm</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Leg Height</td>
      <td className="border border-gray-600 px-4 py-2">5.46 cm</td>
      <td className="border border-gray-600 px-4 py-2">5.46 cm</td>
    </tr>
  </tbody>



  <thead>
    <tr>
      <th  className="border border-gray-600 px-4 py-2 text-lg font-bold bg-gray-100">Warranty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Warranty Summary</td>
      <td className="border border-gray-600 px-4 py-2">1 Year Manufacturing Warranty</td>
      <td className="border border-gray-600 px-4 py-2">1.2 Year Manufacturing Warranty</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Warranty Service 
      Type</td>
      <td className="border border-gray-600 px-4 py-2">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
      <td className="border border-gray-600 px-4 py-2">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Covered in Warranty</td>
      <td className="border border-gray-600 px-4 py-2">Warranty Against Manufacturing Defect</td>
      <td className="border border-gray-600 px-4 py-2">Warranty of the product is limited to manufacturing defects only.</td>
    </tr>
    <tr>
      <td className="border border-gray-600 px-4 py-2 font-semibold">Not Covered in Warranty</td>
      <td className="border border-gray-600 px-4 py-2">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
      <td className="border border-gray- -4 py-2">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
    </tr>
    <tr>
      <td className="border border-gray- -4 py-2 font-semibold">Domestic Warranty</td>
      <td className="border border-gray- -4 py-2">1 Year</td>
      <td className="border border-gray- -4 py-2">2 Year</td>
    </tr>
    
  </tbody>
</table>

      </div>
      </div>
  );
}











