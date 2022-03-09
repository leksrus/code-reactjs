import { useState } from 'react'
import './ItemCount.css'


function ItemCount() {
    const stockItems = 10;

    const [counter, setCounter] = useState(0);

    const increase = () => {
        if(counter < stockItems)
            setCounter(count => count + 1);
    };

    const decrease = () => {
        if(counter > 0)
            setCounter(count => count - 1);
        else
            setCounter(0);
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
                                <div className="btn-cart" onClick={increase}>+</div>
                                <div className="count">{counter}</div>
                                <div className="btn-cart" onClick={decrease}>-</div>
                            </div>
                            <button className="btn-custom" onClick={increase}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;