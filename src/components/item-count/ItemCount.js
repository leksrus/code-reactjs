import { useState } from 'react'
import './ItemCount.css'

function ItemCount() {
    const [counter, setCounter] = useState(1);

    const [stockItems, setStock] = useState(10);

    const increase = () => {
        if(counter < stockItems)
            setCounter(count => count + 1);
    };

    const decrease = () => {
        if(counter > 1)
            setCounter(count => count - 1);
    };

    const onAdd = () => {
        if(stockItems >= counter){
            console.log(`Adding to cart items: ${counter}`);
            setStock(stockItems => stockItems - counter);
        }
        else console.log(`Unavalable items ${counter} in stock. Stock left: ${stockItems}`);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="btn-cart noselect" onClick={increase}>+</div>
                <div className="count">{counter}</div>
                <div className="btn-cart noselect" onClick={decrease}>-</div>
            </div>
            <button className="btn-custom" onClick={onAdd}>Add to Cart</button>
        </>
    );
}

export default ItemCount;