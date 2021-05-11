import * as homeTypes from "./homeTypes";

export const buyNow = data => {
  return (dispacth, getState) => {
    dispacth({
    type: homeTypes.BUY_NOW,
    data
  })

  dispacth(fetchCartNum())
};
};

export const updateProduct = (product_id, calType) => {
  return (dispacth, getState) => {
    dispacth({
    type: homeTypes.MODIFY_PRODUCT,
    product_id,
    calType
  })
  dispacth(fetchCartNum())
};
};


export const fetchCartNum = () => {
  return (dispacth, getState) => {
    let count = getState().home.cart.length
    console.log("count", count);
    console.log("count", count);
    console.log("count", count);
    dispacth({
      type: homeTypes.MODIFY_CART_COUNT,
      count: count
    })

  };
}