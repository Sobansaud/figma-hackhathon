


// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";

// // Define the type for products in the cart
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// // Create a context for the cart with a default value of null
// const CartContext = createContext<{
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: number) => void;
//   clearCart: () => void;
//   getTotalItems: () => number;
//   getTotalPrice: () => number;
// } | null>(null); // Default value is null

// // Custom hook for using the CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// // Provider component
// interface CartProviderProps {
//   children: ReactNode; // Type the children prop as ReactNode
// }

// export const CartProvider = ({ children }: CartProviderProps) => {
//   const [cart, setCart] = useState<Product[]>([]); // Cart is typed as an array of Product objects

//   // Add item to the cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]); // Adds the product to the cart
//   };

//   // Remove item from the cart
//   const removeFromCart = (productId: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // Filters out the item with the given ID
//   };

//   // Clear the cart
//   const clearCart = () => {
//     setCart([]); // Clears the cart
//   };

//   // Get total items in the cart
//   const getTotalItems = () => cart.length;

//   // Get total price of items in the cart
//   const getTotalPrice = () =>
//     cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         getTotalItems,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };






















"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    // Redirect to cart page
    router.push("/cart");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
