

const products = [
    { id: 1, category: 'cpu', name: "CPU I5", price: 150.99   ,imgSrc:'/images/products/cpu-intel-i5.jpg', description: 'CPU I5 Intel' },
    { id: 2, category: 'mouse', name: "Mouse Redgon", price: 30 ,imgSrc:'/images/products/mouse-redrgon-m711.jpg', description: 'Mouse Redrgon' },
    { id: 3, category: 'memory', name: "Memory HyperX", price: 250.99    ,imgSrc:'/images/products/memory-hyperx.jpg', description: 'Memory HyperX' },
    { id: 4, category: 'mouse', name: "Mouse Redgon", price: 29.99    ,imgSrc:'/images/products/mouse-redrgon-m610.jpg', description: 'Mouse Redragon M610' },
    { id: 5, category: 'keyboard', name: "Keyboard Redragon", price: 25.99 ,imgSrc:'/images/products/keyboard-redragon-k551.jfif', description: 'Keyboard Redragon K551' },
    { id: 6, category: 'gpu', name: "MSI 3080TI", price: 550.99 ,imgSrc:'/images/products/msi-rtx-3080ti.jpg', description: 'MSI RTX 3080TI' },
    { id: 7, category: 'ssd', name: "SSD Firecuda", price: 250.59      ,imgSrc:'/images/products/ssd-firecuda.jpg', description: 'SSD Firecuda'  }
]


export const getProducts = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    } else {
        reject('400 - not found')
    }
})
