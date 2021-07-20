import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getComments } from "../../redux/actions/currentClient.action";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { getDeleteComment } from "../../redux/actions/currentClient.action";

export default function CommentsClients() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const userId = user?._id;
  const userName = user?.name;
  const items = useSelector((state) => state.currentClient);
  const comments = items?.comments;

  const authorId = items?._id;

  const onSubmit = (data) => {
    dispatch(getComments(data, id, userId, userName));
    reset();
  };

  const deleteHandler = (id) => {
    dispatch(getDeleteComment(id));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("comments")}></input>
      <button type="submit">Добавить</button>
      <div className="commentsList">
        {comments.map((el) => (
          <>
            <li>{el.body}</li>
            <li>Автор: {el.author} </li>
            <li>Дата создания: {el.date}</li>
            {userId === el.authorId && (
              <Button
                onClick={() => deleteHandler(el._id)}
                variant="contained"
                color="primary"
              >
                Удалить
              </Button>
            )}
          </>
        ))}
      </div>
    </form>
  );
}
