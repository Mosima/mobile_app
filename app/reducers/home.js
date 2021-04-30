import * as homeTypes from "@actions/homeTypes";

const cart = [{
    "user_id": '1',
    "product_id": "",
    "product_name": "",
    "supplier_name": "",
    "product_type": "",
    "product_discription": " 10",
    "price": "10.00",
    "terminal_user": "1",
    "image": "",
    "type":""
}]

export default (state = cart, action = {}) => {
  switch (action.type) {
    case homeTypes.BUY_NOW:
      return {
        cart: [...state.cart,...action.data]
      };
    default:
      return state;
  }
};
