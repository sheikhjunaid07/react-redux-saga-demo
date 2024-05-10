import { SET_PRODUCT_LIST } from "./constant";

export const productData = (productDetails = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST: 
            console.log("Set product list called", action);
            console.log("profuct details", productDetails);
            return[...action.productDetails]

        default: return productDetails;
    }
}
