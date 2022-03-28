class Cart {
    constructor() {
        this.products = [];
    }

    addProductWithQuantity(product, quantity) {
        for (let i = 0; i < quantity; i++)
            this.products.push(product);
    }

    removeProduct(product) {
        const prod = this.products.find((x) => x.id === product.id);

        if (prod === undefined) return;

        this.products.splice(
            this.products.findIndex((x) => x.id === prod.id),
            1
        );
    }

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        return this.products.find((x) => x.id === parseInt(id));
    }

    showCartItems() {
        if (this.products.length === 0) return;

        const result = [];
        this.products.reduce((res, value) => {
            if (!res[value.id]) {
                res[value.id] = {
                    id: value.id,
                    name: value.name,
                    description: value.description,
                    price: 0,
                    imgSrc: value.imgSrc,
                };
                result.push(res[value.id]);
            }
            res[value.id].price += value.price;
            return res;
        }, {});

        return result;
    }

    clearProducts() {
        this.products = [];
    }
}

export default Cart;