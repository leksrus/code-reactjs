import CartList from "../../components/cart-list/CartList";
import {useCartContext} from "../../context/CartContext";
import {collection, getFirestore, query, where, documentId, getDocs, addDoc} from "firebase/firestore/lite";
import {getFirestoreApp} from "../../firebase/firebase-config";
import {useState} from "react";
import Order from "../../components/Order/Order";

function CartItemContainer() {
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    const [message, setMessage] = useState('');
    const {cartList, clearCart} = useCartContext();

    const onPreCompleteOrder = (total) => {
        setOrder(undefined);
        setMessage('');
        const db = getFirestore(getFirestoreApp());
        const productCollection = collection(db, 'products');
        const  productQuery = query(productCollection,
            where(documentId(), 'in', cartList.map(x => x.documentId)));

        getDocs(productQuery).then((productSnapshot) => {
           const storedProducts = productSnapshot.docs.map(doc => ({documentId: doc.id, ...doc.data() }));
            let tempOrder = undefined;

            for (const product of storedProducts) {
                const item = cartList.find(x => x.documentId === product.documentId);

                if(item){
                    if(product.stock >= item.quantity)
                        tempOrder = { buyer: {name: 'test', phone: '11-1111-1111', email: 'test@test'}, items: [], date: new Date(), total: total };
                    else {
                        setMessage('Unavailable stock. Check you order ');
                        break;
                    }
                    tempOrder.items.push({id: item.documentId, name: item.name, price: item.price});
                }
            }
            setOrder(tempOrder);
        }).catch(error => console.log(error));
    }

    const onCompleteOrder = () => {
        const db = getFirestore(getFirestoreApp());
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(orderSnapshot => {
            console.log(orderSnapshot.id);
            setOrderId(orderSnapshot.id);
            setMessage('');
            clearCart();
        }).catch(error => console.log(error));
    }

    return(
       orderId ? <Order orderId={ orderId }/> :
           <CartList onPreCompleteOrder = { onPreCompleteOrder } order= { order} onCompleteOrder={ onCompleteOrder} message={ message }/>
    );
}


export default CartItemContainer;