import { createContext, useState } from 'react';
import { getProductData } from './productsStore';

export const CartContext = createContext();

// cart, addToCart, removeFromCart

// Provider -> gives your React app access to all the things in your context

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find((p) => p.id === id)?.quantity;

    if (!quantity) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((p) => {
          if (p.id === id) {
            return { id, quantity: p.quantity + 1 };
          } else {
            return p;
          }
        })
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts(cartProducts.filter((p) => p.id !== id));
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((p) => {
          if (p.id === id) {
            return { id, quantity: p.quantity - 1 };
          } else {
            return p;
          }
        })
      );
    }
  };

  const getTotalCost = () => {
    let total = 0;

    cartProducts.map((p) => {
      const data = getProductData(p.id);
      total += data.price * p.quantity;
      return p;
    });

    return total;
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    deleteFromCart,
    removeOneFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
