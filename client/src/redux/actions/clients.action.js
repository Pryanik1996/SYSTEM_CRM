import {
  CLIENT_ADD,
  CLIENT_ADD_ALL,
  CLIENTS_GET_START,
  CLIENTS_GET_SUCCESS,
  CLIENTS_GET_ERROR,
} from "../types";

export const setAllClient = (clients) => ({
  type: CLIENT_ADD_ALL,
  payload: clients,
});

export const setClient = (clients) => ({
  type: CLIENT_ADD,
  payload: { clients },
});

export const getAllClient = () => (dispatch) => {
  fetch(`http://localhost:3001/clients/new`).then((data) =>
    dispatch(setAllClient(data))
  );
};

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
    dispatch(setClient(res));
  }
  // history.replaceState("/clients");
  // } else {
  // history.replaceState("/clients/new");
  // }
};

//========

const getAllClientsStart = () => ({ type: CLIENTS_GET_START });

const getAllClientsSuccess = (payload) => ({
  type: CLIENTS_GET_SUCCESS,
  payload,
});
const getAllClientsError = (payload) => ({ type: CLIENTS_GET_ERROR, payload });

export const getClients = () => async (dispatch) => {
  dispatch(getAllClientsStart());
  const response = await fetch("http://localhost:3001/clients/all");
  if (response.ok) {
    const parsedClients = await response.json();
    return dispatch(getAllClientsSuccess(parsedClients));
  }
  const err = await response.json();
  dispatch(getAllClientsError(err));
};
