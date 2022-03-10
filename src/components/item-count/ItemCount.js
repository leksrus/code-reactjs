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
        <div className="row align-items-start">
            <div className="col-12">
                <div className="offset-md-4 col-12 col-md-4 col-lg-3">
                    <div className="card text-dark bg-light mb-5 transition">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="card-img-top image-min-height-315" src="/images/products/cpu-intel-i5.jpg"
                                 alt="Cpu Intel I5"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center"><b>Cpu Intel I5e</b></h5>
                            <p className="card-text text-center">$190.99</p>
                            <p className="card-text text-center">Intel CPU I5 Series</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="btn-cart noselect" onClick={increase}>+</div>
                                <div className="count">{counter}</div>
                                <div className="btn-cart noselect" onClick={decrease}>-</div>
                            </div>
                            <button className="btn-custom" onClick={onAdd}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;