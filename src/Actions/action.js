export const setProductData = (products) =>{
    return {
        type: "set_PRODUCT_DATA",
        payLoad: products
    }
}

export const secondProductData = (secondProducts) =>{
    return {
        type: "SECOND_PRODUCT_DATA",
        payLoad:[secondProducts]
    }
}