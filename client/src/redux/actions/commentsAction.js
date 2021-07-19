import { COMMENT_ADD } from "../types";
import { commentOrder } from "./currentOrderAction";

export const addComment = (data) => ({
  type: COMMENT_ADD,
  payload: data,
});

export const addCommentToOrder =
  (id, comment, userName) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/orders/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment, userName }),
      });
      const data = await response.json();
      dispatch(addComment(data.newComment));
      dispatch(commentOrder(data.updOrder));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteCurrentComment = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3001/orders/${id}/comments`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const data = await response.json();
  } catch (error) {}
};
