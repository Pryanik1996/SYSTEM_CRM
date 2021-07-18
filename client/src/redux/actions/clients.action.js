import { CLIENT_ADD, CLIENT_ADD_ALL } from "../types";


export const setAllClient = (clients) => ({
  type: CLIENT_ADD_ALL,
  payload: clients,
})

// export const setClient = (clients) => ({
//   type: CLIENT_ADD,
//   payload: clients,
// });

export const getAllClient = () => async (dispatch) => {
const data = await fetch(`http://localhost:3001/clients/card`)
const res = await data.json()
console.log(res)
dispatch(setAllClient(res))
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
    console.log(res, '<<<++')
    // dispatch(setClient(res));
    history.push("/clients/card");
  } else {
    history.push("/clients/new");
  }
}


export const getEditClient = (inputs, id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3005/api/v1/blocknote/edit`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title: inputs[0].getValue(),
    }),
  });
  const data = await response.json();
  dispatch(editBlocknote(data));
};