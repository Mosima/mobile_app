import * as homeTypes from "./homeTypes";

export const buyNow = data => {
  return {
    type: homeTypes.BUY_NOW,
    data
  };
};