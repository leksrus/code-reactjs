import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState( [])

    const addToCart = (product, quantity) => {
        const cartItem = cartList.find(x => x.id === product.id);

        if(cartItem){
            const cartItems = cartList.filter(x => x.id !== cartItem.id);
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
        console.log(item)
        const cartItem = cartList.find(x => x.id === item.id);

        if(cartItem){
            cartItem.quantity -= 1;
            if(cartItem.quantity > 0) {
                const cartItems = cartList.filter(x => x.id !== cartItem.id);
                cartItems.push(cartItem);
                setCartList(cartItems);
            }
            else {
                setCartList(cartList.filter(x => x.id !== cartItem.id));
            }
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            getTotalProductsFromCart,
            removeProductFromCart,
            clearCart,
            getTotalPrice
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
