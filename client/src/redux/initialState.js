const initialState = {
  workers: [],
  clients: [],
  orders: [],
  user: null,
  currentOrder: null,
};

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
//   return stateFromLS ? stateFromLS : initialState;
// };

// export default getInitState;

export default initialState;
