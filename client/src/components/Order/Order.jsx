import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import React, { useEffect, useState, useMemo } from "react";
import { getOrder } from "../../redux/actions/order.action";
import { useHistory, useLocation } from "react-router";
import {
  getOneOrder,
  deleteCurrentOrder,
  deleteCurrentComment,
  editCurrentOrder,
} from "../../redux/actions/currentOrderAction";
import { addCommentToOrder } from "../../redux/actions/commentsAction";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Modal from "../Modal/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Order.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Order() {
  const [addComment, setAddComment] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // const handleSubmitModal = (e) => {
  //   e.preventDefault();
  // };
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const deleteOrder = () => {
    dispatch(deleteCurrentOrder(id, history));
  };
  // const deleteComment = () => {
  //   dispatch (deleteCurrentComment(id))
  // }

  const addCommentStatus = () => {
    setAddComment(!addComment);
  };

  const currentOrder = useSelector((state) => state.currentOrder);
  const orderId = useSelector((state) => state.currentOrder?._id);
  const userName = useSelector((state) => state.user?.name);
  // console.log("44444444=>", userName);

  useEffect(() => {
    dispatch(getOneOrder(id));
  }, []);

  const {
    register,
    handleSubmit,
    watch, //отслеживание содержимого инпута
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(getOrder(data, history));
    reset();
  };

  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    if (event.target.value) {
      setComment(event.target.value);
    } else {
      setComment("");
    }
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(addCommentToOrder(orderId, comment, userName));
    setComment("");
    setAddComment(!addComment);
  };

  // console.log("COMMMMMENT=>", comment);
  // console.log("0000=>>>", userName);

  const initialForm = useMemo(
    () => ({
      number: currentOrder?.number,
      typeFurn: currentOrder?.typeFurn,
      priceFurn: currentOrder?.priceFurn,
      priceDeliv: currentOrder?.priceDeliv,
      dateDeliv: currentOrder?.dateDeliv,
      priceConstr: currentOrder?.priceConstr,
      dateConstr: currentOrder?.dateConstr,
      teamDeliv: currentOrder?.teamDeliv,
      teamConstr: currentOrder?.teamConstr,
      status: currentOrder?.status,
      commentsWhenCreate: currentOrder?.commentsWhenCreate,
    }),
    [currentOrder]
  );
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  function сhangeHandler(e) {
    setFormState((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  }
  function onSubmitForm(e) {
    e.preventDefault();
    // setFormState(initialForm);
    dispatch(editCurrentOrder(id, formState));
    setModalActive(false);
  }

  console.log(formState, currentOrder);

  return (
    <div className="orderInfo">
      <div className="orderInfoSmall">
        <h5>
          Подробнее о заказе № {currentOrder?.number} для клиента{" "}
          {currentOrder?.client?.surname} {currentOrder?.client?.name}{" "}
          {currentOrder?.client?.patronymic}
        </h5>
        <div>
          Тип мебели: <b>{currentOrder?.typeFurn}</b>{" "}
        </div>
        <div>
          Стоимость мебели: <b>{currentOrder?.priceFurn}</b>{" "}
        </div>
        <div>
          Стоимость доставки: <b>{currentOrder?.priceDeliv}</b>{" "}
        </div>
        <div>
          Дата доставки: <b>{currentOrder?.dateDeliv}</b>{" "}
        </div>
        <div>
          Дата сборки: <b>{currentOrder?.dateConstr}</b>{" "}
        </div>
        <div>
          Бригада доставки: <b>{currentOrder?.teamDeliv}</b>{" "}
        </div>
        <div>
          Бригада сборки: <b>{currentOrder?.teamConstr}</b>{" "}
        </div>
        <div>
          Статус заказа: <b>{currentOrder?.status}</b>{" "}
        </div>
        <div>
          Комментарий при заказе: <b>{currentOrder?.commentsWhenCreate}</b>{" "}
        </div>
        <hr />
        {addComment ? (
          <form onSubmit={(e) => handleSubmitComment(e)}>
            <input
              placeholder="Ваш комментарий"
              type="text"
              value={comment}
              onChange={handleComment}
            />
            <Button type="submit" variant="contained">
              Подтвердить
            </Button>{" "}
          </form>
        ) : (
          <>
            <Button variant="contained" onClick={() => addCommentStatus()}>
              Оставить комментарий
            </Button>
            <Button variant="contained" onClick={() => setModalActive(true)}>
              Редактировать заказ
            </Button>
            <Button variant="contained" onClick={() => setModalDelete(true)}>
              Удалить заказ
            </Button>
          </>
        )}
        <div>
          Комментарии сотрудников:{" "}
          {currentOrder?.comments?.length ? (
            <ul className="commentsOrderList">
              {currentOrder?.comments.map((el) => (
                <li className="commentsOrderItem">
                  <div className="commentsOrderItemLeft">
                    <div>
                      {" "}
                      <b>{el.body}</b>
                    </div>
                    <div style={{ fontSize: "14px" }}>
                      {el.author}, {el.date}
                    </div>
                  </div>
                  {el.author === userName && (
                    <div className="commentsOrderItemRight">
                      <DeleteIcon
                        fontSize="large"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(deleteCurrentComment(el._id, id))
                        }
                        variant="contained"
                        size="small"
                      >
                        удалить комментарий
                      </DeleteIcon>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>Комментариев пока нет</p>
          )}
        </div>

        {modalActive ? (
          <Modal active={modalActive} setActive={setModalActive}>
            <div className="card">
              <div className="card-header">Редактирование карточки заказа</div>
              <div className="card-body">
                <form className={classes.root} onSubmit={onSubmitForm}>
                  <input
                    value={formState.number}
                    onChange={сhangeHandler}
                    id="number"
                    type="text"
                  />
                  <input
                    value={formState.typeFurn}
                    onChange={сhangeHandler}
                    id="typeFurn"
                    type="text"
                  />
                  <input
                    value={formState.priceFurn}
                    onChange={сhangeHandler}
                    id="priceFurn"
                    type="text"
                  />
                  <input
                    value={formState.priceDeliv}
                    onChange={сhangeHandler}
                    id="priceDeliv"
                    type="text"
                  />
                  <input
                    value={formState.dateDeliv}
                    onChange={сhangeHandler}
                    id="dateDeliv"
                    type="text"
                  />
                  <input
                    value={formState.priceConstr}
                    onChange={сhangeHandler}
                    id="priceConstr"
                    type="text"
                  />
                  <input
                    value={formState.dateConstr}
                    onChange={сhangeHandler}
                    id="dateConstr"
                    type="text"
                  />
                  <input
                    value={formState.teamDeliv}
                    onChange={сhangeHandler}
                    id="teamDeliv"
                    type="text"
                  />
                  <input
                    value={formState.teamConstr}
                    onChange={сhangeHandler}
                    id="teamConstr"
                    type="text"
                  />
                  <input
                    value={formState.status}
                    onChange={сhangeHandler}
                    id="status"
                    type="text"
                  />
                  <input
                    value={formState.commentsWhenCreate}
                    onChange={сhangeHandler}
                    id="commentsWhenCreate"
                    type="text"
                  />

                  {/* <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Статус заказа
                </InputLabel>
                <Select
                  defaultValue={currentOrder?.status}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register("status")}
                >
                  <MenuItem value={"Ожидание поставки"}>
                    Ожидание поставки
                  </MenuItem>
                  <MenuItem value={"В работе"}>В работе</MenuItem>
                  <MenuItem value={"Собран"}>Собран</MenuItem>
                  <MenuItem value={"Доставлен"}>Доставлен</MenuItem>
                  <MenuItem value={"Рекламация"}>Рекламация</MenuItem>
                </Select>
              </FormControl> */}

                  <hr />

                  <span>
                    <Button type="submit" variant="contained" color="primary">
                      Сохранить изменения
                    </Button>
                  </span>
                </form>
              </div>
            </div>
          </Modal>
        ) : (
          <></>
        )}
        <Modal active={modalDelete} setActive={setModalDelete}>
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              Вы уверены, что хотите удалить заказ № {currentOrder?.number} ?
              <hr />
              <span>
                <Button
                  onClick={() => deleteOrder(orderId)}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Удалить
                </Button>
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
