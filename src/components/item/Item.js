

function Item({product}) {
    return   (
            <div className="col-12 col-md-4 col-lg-3">
                <div className="card text-dark bg-light mb-5 transition">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="card-img-top image-min-height-315" src={product.imgSrc}
                             alt={product.name}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center"><b>{product.name}</b></h5>
                        <p className="card-text text-center">{product.price}</p>
                        <p className="card-text text-center">{product.description}</p>
                    </div>
                </div>
            </div>
    );
}

export default Item;