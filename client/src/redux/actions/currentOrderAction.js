import { ORDER_ONE } from "../types";

export const oneOrder = (res) => ({
  type: ORDER_ONE,
  payload: res,
});

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/orders/${id}`);
    const result = await response.json();
    console.log("RES=>", result);
    dispatch(oneOrder(result));
  } catch (error) {
    console.log(error);
  }
};
