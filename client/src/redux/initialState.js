const initialState = {
  workers: [],
  clients: [],
<<<<<<< HEAD
  orders: {},
=======
  orders: {
    loading: false,
    error: null,
    values: [],
  },
>>>>>>> origin/testTuesday
  user: null,
  currentOrder: null,
  comments: [],
  items: [],
};

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
//   return stateFromLS ? stateFromLS : initialState;
// };

// export default getInitState;

export default initialState;
