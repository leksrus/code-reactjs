

const product = { id: 1, category: 'cpu', name: "CPU I5", price: 150.99   ,imgSrc:'/images/products/cpu-intel-i5.jpg', description: 'CPU I5 Intel 10th Gen' };


export const getProduct = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(product)
        }, 2000);
    } else {
        reject('400 - not found')
    }
})