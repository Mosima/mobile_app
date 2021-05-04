import * as homeTypes from "@actions/homeTypes";

const initialState = {
    cart : [{
    "user_id": '',
    "product_id": "",
    "product_name": "",
    "supplier_name": "",
    "product_type": "",
    "product_discription": " 10",
    "price": "10.00",
    "terminal_user": "1",
    "image": "",
    "type":""
}],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case homeTypes.BUY_NOW:
      let res = state.cart;
      res.push(action.data)
      return {
        cart:res
      };
    default:
      return state;
  }
};
