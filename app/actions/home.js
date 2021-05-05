import * as homeTypes from "./homeTypes";

export const buyNow = data => {
  return {
    type: homeTypes.BUY_NOW,
    data
  };
};

export const updateProduct = (product_id, calType) => {
  return {
    type: homeTypes.MODIFY_PRODUCT,
    product_id,
    calType
  };
};


// export const fetchCart = () =>{

// }