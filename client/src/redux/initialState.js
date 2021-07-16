const initialState = {
  // items: [],
  user: null,
  // isAuthenticated: false,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
