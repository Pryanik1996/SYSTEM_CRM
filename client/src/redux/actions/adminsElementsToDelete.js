import {
  LIST_OF_DELETED_ITEMS,
  DELETE_ITEM,
  CHANGE_STATUS
} from "../types";

export const allDeletedItems = (items) =>({
  type: LIST_OF_DELETED_ITEMS,
  payload : {items}
})

export const deleteItem = (id) =>({
  type: DELETE_ITEM,
  payload: {id}
})

export const changeDeleteStatus = (id)=>({
  type: CHANGE_STATUS,
  payload: {id}
})

export const allDeletedClients = () => (dispatch) => {
  fetch(`http://localhost:3001/admin/clients`,{
    credentials: 'include'
  })
  .then((response) => response.json())
  .then((data)=> dispatch(allDeletedItems(data)))
};

export const allDeletedOrders = () => (dispatch) => {
  fetch(`http://localhost:3001/admin/orders`,{
    credentials: 'include'
  })
  .then((response) => response.json())
  .then((data)=> dispatch(allDeletedItems(data)))
};

export const deleteThisItem = (id) =>(dispatch)=>{
  console.log(345);
  fetch(`http://localhost:3001/admin/clients/${id}`,{
    method:"DELETE",
    credentials: 'include'
  })
  .then((response) => {
    if (response.ok) {
      dispatch(deleteItem(id))
    }
  })
  .catch((error) => console.log(error));
}

export const deleteThisOrder = (id) =>(dispatch)=>{
  console.log(345);
  fetch(`http://localhost:3001/admin/orders/${id}`,{
    method:"DELETE",
    credentials: 'include'
  })
  .then((response) => {
    if (response.ok) {
      dispatch(deleteItem(id))
    }
  })
  .catch((error) => console.log(error));
}
