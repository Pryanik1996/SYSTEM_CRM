import { CLIENT_ADD, CLIENT_ADD_ALL } from "../types";


export const setAllClient = (clients) => ({
  type: CLIENT_ADD_ALL,
  payload: clients,
})

export const setClient = (clients) => ({
  type: CLIENT_ADD,
  payload: clients,
});

export const getAllClient = () => (dispatch) => {
  fetch(`http://localhost:3001/clients/new`)
.then(data => dispatch(setAllClient(data)))
}

export const getClient = (data, history) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/clients/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      email: data.email,
      phone: data.phone,
      address: data.address,
    }),
  });
  if (response.status === 200) {
    const res = await response.json();
    console.log(res)
    dispatch(setClient(res));
  //   history.replaceState("/clients");
  // } else {
  //   history.replaceState("/clients/new");
  }
}
