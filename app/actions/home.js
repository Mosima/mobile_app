import * as homeTypes from "./homeTypes";

const buyNow = data => {
  return {
    type: homeTypes.BUY_NOW,
    data
  };
};