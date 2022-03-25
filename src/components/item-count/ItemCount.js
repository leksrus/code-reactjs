import { useState } from 'react'
import './ItemCount.css'

function ItemCount( { stock, onAdd}) {
    const [counter, setCounter] = useState(1);

    const increase = () => {
        if(counter < stock)
            setCounter(counter => counter + 1);
    };

    const decrease = () => {
        if(counter > 1)
            setCounter(counter => counter - 1);
    };

    const add = () => {
        onAdd(counter);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                <div className="btn-cart noselect" onClick={increase}>+</div>
                <div className="count">{counter}</div>
                <div className="btn-cart noselect" onClick={decrease}>-</div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn-custom w-50" onClick={add}>Add to Cart</button>
            </div>
        </>
    );
}

export default ItemCount;