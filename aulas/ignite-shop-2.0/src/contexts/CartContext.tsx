import React, { createContext, ReactNode, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  AddToCart: (product: IProduct) => void;
  checkIfItemAlreadyExists: (productId: string) => void;
  removeCartItem: (productID: string) => void;
  cartTotal: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({ } as CartContextData)

export function CartContnextProvider({children}: CartContextProviderProps){
  
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function AddToCart(product: IProduct) {
    setCartItems(state => [...state, product] )
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId );
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }
  
  return (
    <CartContext.Provider value={{cartItems, 
    AddToCart, 
    checkIfItemAlreadyExists, 
    removeCartItem,
    cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}