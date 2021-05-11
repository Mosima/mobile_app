import * as homeTypes from "./homeTypes";

export const buyNow = data => {
  return (dispacth, getState) => {
    dispacth({
    type: homeTypes.BUY_NOW,
    data
  })

  dispacth(fetchCartNum())
  dispacth(fetchCartTotal())
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
  dispacth(fetchCartTotal())
};
};


export const fetchCartNum = () => {
  return (dispacth, getState) => {
    let count = getState().home.cart.length
    dispacth({
      type: homeTypes.MODIFY_CART_COUNT,
      count: count
    })

  };
}

export const fetchCartTotal = () => {
  return (dispacth, getState) => {
    let totPrice = getState().home.cart?getState().home.cart.reduce((a,b) => b.newPrice + (a.newPrice ? a.newPrice : a)):0
    console.log(totPrice);
    dispacth({
      type: homeTypes.MODIFY_CART_TOTAL_PRICE,
      totPrice: totPrice
    })

  };
}