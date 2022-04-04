import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState( [])

    const addToCart = (product, quantity) => {
        console.log(product);
        const cartItem = cartList.find(x => x.documentId === product.documentId);

        if(cartItem){
            const cartItems = cartList.filter(x => x.documentId !== cartItem.documentId);
            cartItem.quantity += quantity;
            cartItems.push(cartItem);
            setCartList(cartItems);
        }
        else setCartList([ ...cartList, Object.assign({}, product, {quantity: quantity})]);
    }

    const getTotalProductsFromCart = () => {
        let count = 0;
        for (const item of cartList) {
            count += item.quantity;
        }

        return count;
    }

    const getTotalPrice = () => {
        let total = 0.00;
        for (const item of cartList) {
            total += item.price * item.quantity;
        }

        return total;
    }

    const clearCart = () => {
        setCartList([]);
    }

    const removeProductFromCart = (item) => {
        const cartItem = cartList.find(x => x.documentId === item.documentId);

        if(cartItem){
            cartItem.quantity -= 1;
            if(cartItem.quantity > 0) {
                const cartItems = cartList.filter(x => x.documentId !== cartItem.documentId);
                cartItems.push(cartItem);
                setCartList(cartItems);
            }
            else {
                setCartList(cartList.filter(x => x.documentId !== cartItem.documentId));
            }
        }
    }

    const removeAllProductQuantity = (item) => {
        const cartItem = cartList.find(x => x.documentId === item.documentId);

        if(cartItem) setCartList(cartList.filter(x => x.documentId !== cartItem.documentId));
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            getTotalProductsFromCart,
            removeProductFromCart,
            clearCart,
            getTotalPrice,
            removeAllProductQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
