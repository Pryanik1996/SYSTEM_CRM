import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { getOrder } from "../../redux/actions/order.action";
import { useHistory, useLocation } from "react-router";

import {
  getOneOrder,
  deleteCurrentOrder,
  addCommentToOrder,
} from "../../redux/actions/currentOrderAction";

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
  const handleSubmitModal = (e) => {
    e.preventDefault();
  };
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const deleteOrder = () => {
    dispatch(deleteCurrentOrder(id, history));
  };
  // const addCommentStatus = () => {
  //   dispatch(addCommentToOrder(id));
  // };

  const addCommentStatus = () => {
    setAddComment(!addComment);
  };

  const currentOrder = useSelector((state) => state.currentOrder);
  const orderId = useSelector((state) => state.currentOrder?._id);
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
    console.log(data);
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
  const handleSubmitComment = () => {
    dispatch(addCommentToOrder(orderId, comment))
  }

  console.log('COMMMMMENT=>', comment);

  return (
    <div className="orderInfo">
      <h5>Подробнее о заказе № {currentOrder?.number}</h5>
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
        Комментарии при заказе: <b>{currentOrder?.teamConstr}</b>{" "}
      </div>
      {addComment ? (
        <form onSubmit={()=> handleSubmitComment()}>
         <input placeholder="Ваш комментарий" type="text" value={comment} onChange={handleComment} />
          <Button variant="contained">Подтвердить</Button>{" "}
        </form>
      ) : (
        <>
          {" "}
          <Button variant="contained" onClick={() => addCommentStatus()}>
            Оставить комментарий
          </Button>
          <Button variant="contained" onClick={() => setModalActive(true)}>
            Редактировать
          </Button>
          <Button variant="contained" onClick={() => deleteOrder(orderId)}>
            Удалить
          </Button>{" "}
        </>
      )}

      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={handleSubmitModal}>
          <div className="card">
            <div className="card-header">Редактирование карточки заказа</div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <br />

                <br />
                <hr />
                {errors.name && <p>Обязательное поле, не более 15 символов</p>}
                <TextField
                  label="Номер заказа"
                  type="text"
                  id="standard-required"
                  {...register("number", { required: true, maxLength: 15 })}
                />

                <TextField
                  label="Тип мебели"
                  type="text"
                  id="standard-required"
                  {...register("typeFurn")}
                />

                <TextField
                  label="Стоимость мебели"
                  type="text"
                  id="standard-required"
                  {...register("priceFurn")}
                />
                <TextField
                  label="Стоимость доставки"
                  type="email"
                  id="standard-required"
                  {...register("priceDeliv")}
                />

                <TextField
                  id="standard-required"
                  label="Дата доставки"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("dateDeliv")}
                />
                <TextField
                  label="Стоимость сборки"
                  type="text"
                  id="standard-required"
                  {...register("priceConstr")}
                />

                <TextField
                  id="standard-required"
                  label="Дата сборки"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("dateConstr")}
                />

                <TextField
                  label="Бригада доставки"
                  type="text"
                  id="standard-required"
                  {...register("teamDeliv")}
                />

                <TextField
                  label="Бригада сборки"
                  type="text"
                  id="standard-required"
                  {...register("teamConstr")}
                />

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Статус заказа
                  </InputLabel>
                  <Select
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
                </FormControl>

                <TextField
                  label="Комментарий к заказу"
                  type="text"
                  id="standard-required"
                  {...register("commentsWhenCreate")}
                />
                <br />
              </form>

              <hr />
              <span>
                <Button
                  onClick={() => setModalActive(false)}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Изменить
                </Button>
              </span>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
