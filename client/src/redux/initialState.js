const initialState = {
  workers: [],
  clients: [],
  orders: {
    loading: false,
    error: null,
    values: [],
  },
  user: null,
  currentOrder: null,
  comments: [],
  items: [],
  currentClient: {}
};

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
//   return stateFromLS ? stateFromLS : initialState;
// };

// export default getInitState;

export default initialState;
