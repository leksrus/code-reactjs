import CartList from "../../components/cart/cart-list/CartList";
import {useCartContext} from "../../context/CartContext";
import {collection, getFirestore, query, where, documentId, getDocs, addDoc, writeBatch } from "firebase/firestore/lite";
import {getFirestoreApp} from "../../firebase/firebase-config";
import {useState} from "react";
import Order from "../../components/Order/Order";
import {useUserContext} from "../../context/UserContext";
import { useNavigate} from 'react-router-dom';

function CartItemContainer() {
    const {user} = useUserContext();
    const navigate = useNavigate();
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    const [message, setMessage] = useState('');
    const {cartList, clearCart} = useCartContext();

    const onPreCompleteOrder = (total) => {
        if(!user) navigate("/signin");

        setOrder(undefined);
        setMessage('');
        const db = getFirestore(getFirestoreApp());
        const productCollection = collection(db, 'products');
        const  productQuery = query(productCollection,
            where(documentId(), 'in', cartList.map(x => x.documentId)));

        getDocs(productQuery).then((productSnapshot) => {
           const storedProducts = productSnapshot.docs.map(doc => ({documentId: doc.id, ...doc.data() }));
            let tempOrder = undefined;
            let tempItems = [];

            for (const product of storedProducts) {
                const item = cartList.find(x => x.documentId === product.documentId);
                console.log(item)
                console.log(product)

                if(item){
                    if(product.stock >= item.quantity)
                        tempOrder = { buyer: {name: user.name, phone: user.phone, email: user.email}, items: [], date: new Date(), total: total };
                    else {
                        setMessage('Unavailable stock. Check you order ');
                        return;
                    }
                    tempItems.push({id: item.documentId, name: item.name, price: item.price, quantity: item.quantity});
                }
            }
            tempOrder.items.push(...tempItems);
            console.log(tempOrder);
            setOrder(tempOrder);
        }).catch(error => console.log(error));
    }

    const onCompleteOrder = () => {
        updateItemStock().then(() => {
            const db = getFirestore(getFirestoreApp());
            const ordersCollection = collection(db, 'orders');

            addDoc(ordersCollection, order).then(orderSnapshot => {
                console.log(orderSnapshot.id);
                setOrderId(orderSnapshot.id);
                setMessage('');
                clearCart();
            }).catch(error => console.log(error));
        }).catch( err => console.log(err));
    }

    const updateItemStock = async () => {
        const db = getFirestore()
        const productCollection = collection (db,'products')
        const productQuery = query(productCollection, where( documentId(), 'in', cartList.map( x => x.documentId)))
        const batch = writeBatch(db)
        await getDocs(productQuery)
            .then( resp => resp.docs.forEach(res => batch.update( res.ref, {
                stock: res.data().stock - cartList.find(item => item.documentId === res.id).quantity
            })))
            .catch( err => console.log(err));
       await batch.commit();
    }

    return(
       orderId ? <Order orderId={ orderId }/> :
           <CartList onPreCompleteOrder = { onPreCompleteOrder } order= { order} onCompleteOrder={ onCompleteOrder} message={ message }/>
    );
}


export default CartItemContainer;