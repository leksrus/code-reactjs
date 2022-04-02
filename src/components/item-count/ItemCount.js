import { useState } from 'react'
import './ItemCount.css'
import Button from "react-bootstrap/Button";

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
            <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
                <div className="btn-cart noselect" onClick={increase}>+</div>
                <div className="count">{counter}</div>
                <div className="btn-cart noselect" onClick={decrease}>-</div>
            </div>
            <div className="d-flex justify-content-center">
                <Button className="btn-custom w-50" onClick={add}>
                    Add to Cart
                </Button>
            </div>
        </>
    );
}

export default ItemCount;