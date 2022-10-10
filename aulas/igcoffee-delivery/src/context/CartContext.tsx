import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  amount: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartAmount: number
  updateCartAmount: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItem: (cartItemId: number) => void
  CartItemsTotal: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_STRAGE = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem(COFFEE_STRAGE)
    if (savedCartItems) {
      return JSON.parse(savedCartItems)
    }
    return []
  })

  const cartAmount = cartItems.length

  const CartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amount
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeExists < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExists].amount += coffee.amount
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExists = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExists >= 0) {
        draft.splice(coffeeExists, 1)
      }
    })
    setCartItems(newCart)
  }

  function updateCartAmount(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].amount =
          type === 'increase' ? item.amount + 1 : item.amount - 1
      }
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_STRAGE, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartAmount,
        updateCartAmount,
        removeCartItem,
        CartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
