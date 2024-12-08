// "use client"; // Indicating that this component is client-side

// import React from "react";
// import { useRouter } from "next/router";

// export default function CartSidebar({ setCartOpen }) {
//   const router = useRouter();

//   const handleNavigation = (path) => {
//     setCartOpen(false); // Close sidebar
//     router.push(path); // Navigate to the respective page
//   };

//   return (
//     <div className="fixed top-0 right-0 w-1/3 bg-white h-full shadow-lg z-50">
//       <div className="p-6">
//         <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
//         <button
//           onClick={() => setCartOpen(false)}
//           className="text-gray-500 hover:text-gray-700 float-right"
//         >
//           Close
//         </button>
//         <ul className="mt-4">
//           <li className="flex justify-between items-center border-b py-2">
//             <span>Asgaard Sofa</span>
//             <span>Rs. 250,000.00</span>
//           </li>
//         </ul>
//         <div className="mt-6">
//           <button
//             onClick={() => handleNavigation("/cart")}
//             className="px-4 py-2 w-full bg-primary text-white rounded hover:bg-yellow-600 mb-2"
//           >
//             View Cart
//           </button>
//           <button
//             onClick={() => handleNavigation("/checkout")}
//             className="px-4 py-2 w-full bg-primary text-white rounded hover:bg-yellow-600 mb-2"
//           >
//             Checkout
//           </button>
//           <button
//             onClick={() => handleNavigation("/comparison")}
//             className="px-4 py-2 w-full bg-primary text-white rounded hover:bg-yellow-600"
//           >
//             Compare
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








