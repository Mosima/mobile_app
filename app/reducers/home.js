import * as homeTypes from "@actions/homeTypes";

const initialState = {
  cart: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case homeTypes.BUY_NOW:
      let res = []
      res.push(state.cart, action.data)
     
      return {
        cart: res
      };
    default:
      return state;
  }
};
