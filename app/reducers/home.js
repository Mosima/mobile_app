import * as homeTypes from "@actions/homeTypes";

const initialState = {
  cart: [],
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case homeTypes.BUY_NOW:
      let res = state.cart;
      const result = res.find(({ product_id }) => product_id === action.data.product_id);

      result ?
        res.forEach((element, index) => {
          if (element.product_id === result.product_id) {
            res[index].qty++;
            let num = res[index].qty;
            let price = res[index].price;
            res[index].newPrice = num * price;
          }
        })
        : res.push(action.data)
      
      return {
        cart: res
      };
    case  homeTypes.MODIFY_PRODUCT:
      let res1 = state.cart;
      const result1 = res1.find(({ product_id }) => product_id === action.product_id);
      console.log("result1", result1);
      console.log("action.product_id", action.product_id);
      console.log("action.calType", action.calType);

      result1 && action.calType === "add"?
      res1.forEach((element, index) => {
          if (element.product_id === result1.product_id) {
            res1[index].qty++;
            let num = res1[index].qty;
            let price = res1[index].price;
            res1[index].newPrice = num * price;
          }
        })
        :res1.forEach((element, index) => {
          if (element.product_id === result1.product_id) {
            res1[index].qty--;
            let num = res1[index].qty;
            let price = res1[index].price;
            res1[index].newPrice = num * price;
          }
        })
      return {
        cart: res1
      }
    default:
      return state;
  }
};
