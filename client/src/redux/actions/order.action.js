import { ORDER_ADD, ORDER_ADD_ALL } from "../types";


export const setAllOrder = (orders) => ({
  type: ORDER_ADD_ALL,
  payload: orders,
})

export const setOrder = (orders) => ({
  type: ORDER_ADD,
  payload: orders,
});

export const getAllOrder = () => (dispatch) => {
  fetch(`http://localhost:3001/orders/new`)
.then(data => dispatch(setAllOrder(data)))
}

export const getOrder = (data, history) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/orders/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      number: data.number,
      typeFurn: data.typeFurn,
      priceFurn: data.priceFurn,
      priceDeliv: data.priceDeliv,
      dateDeliv: data.dateDeliv,
      priceConstr: data.priceConstr,
      dateConstr: data.dateConstr,
      teamDeliv: data.teamDeliv,
      teamConstr: data.teamConstr,
      status: data.status,
      commentsWhenCreate: data.commentsWhenCreate
    }),
  });
  if (response.status === 200) {
    const res = await response.json();
    console.log(res)
    dispatch(setOrder(res));
  }
    // history.replaceState("/clients");
  // } else {
    // history.replaceState("/clients/new");
  // }
}
