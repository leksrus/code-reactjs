import Item from "../item/Item";


function ItemList({products}) {
    return (
        <>
            {products.map((product) => <Item product={product} /> )}
        </>

    )
}

export default ItemList;