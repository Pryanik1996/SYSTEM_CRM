const state = {

  workers: [],
  clients: [],
  orders: [],
  user: null,
};

const initialState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : state;
};

export default initialState;
