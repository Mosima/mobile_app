import * as homeTypes from "./homeTypes";

export const buyNow = (selectedValue, setSelectedAirtimeValue, currentProduct) => {
  console.log('selectedValue', selectedValue);
  console.log('setSelectedAirtimeValue', setSelectedAirtimeValue);
  
  currentProduct.type = selectedValue
  currentProduct.price = setSelectedAirtimeValue

  console.log('currentProduct', currentProduct);
  return (dispacth, getState) => {
    dispacth({
    type: homeTypes.BUY_NOW,
    data: currentProduct
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
    let totPrice = getState().home.cart.length > 0?getState().home.cart.reduce((a, b) => +a + +b.newPrice, 0):0
    //console('Total price',getState().home.cart.length === 1 ? getState().home.cart[0].price : totPrice)
    dispacth({
      type: homeTypes.MODIFY_CART_TOTAL_PRICE,
      totPrice: totPrice === NaN ? getState().home.cart[0].price : totPrice
    })

  };
}