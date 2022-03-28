import { createContext, useContext, useState } from "react";
import Cart from "../helpers/custom-classes/cart";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({children}) {
    const [cart, setCart] = useState( new Cart())

    const addToCart = (product, quantity) => {
        cart.addProductWithQuantity(product, quantity);
        setCart(cart);
        console.log(cart.getProducts());
    }

    const getTotalProductsFromCart = () => {
       return cart.getProducts().length;
    }

    const clearCart = () => {
        setCart(new Cart());
    }

    const removeProductFromCart = (product) => {
        cart.removeProduct(product);
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            getTotalProductsFromCart,
            removeProductFromCart,
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
