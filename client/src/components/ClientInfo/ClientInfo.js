import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import { getEditClient } from "../../redux/actions/clients.action";
import { useParams } from "react-router-dom";
import { getDeleteClient } from "../../redux/actions/clients.action";
import CommentsClients from "../CommentsClients/CommentsClients";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  "& > *": {
    margin: theme.spacing(1),
  },
}));

export default function ClientInfo({
  name,
  surname,
  patronymic,
  email,
  phone,
  address,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const item = useSelector((state) => state.clients);
  const { clients } = item;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const userId = user._id;
  // console.log('121112121212', userId)

  const onSubmit = (data) => {
    dispatch(getEditClient(data, id));
    reset();
  };

  const deleteHandler = () => {
    dispatch(getDeleteClient(id));
  };

  return (
    <>
      <CardContent>
        <h5>Hello</h5>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name} {surname} {patronymic}
        </Typography>
        <Typography variant="h5" component="h2">
          {email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {phone}
        </Typography>
        <Typography variant="body2" component="p">
          {address}
          <br />
          <br />
          <p>Оставить комментарий:</p>
          <CommentsClients />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/orders/new/${id}`}>Создать заказ</Link>
        <Button onClick={() => setModalActive(true)} size="small">
          Редактировать
        </Button>
        <Button onClick={deleteHandler} size="small">
          Удалить
        </Button>
      </CardActions>
      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">Редактирование карточки клиента</div>
            {errors.name && <p>Обязательное поле, не более 15 символов</p>}
            <div className="card-body">
              <h6>Имя</h6>
              <input
                defaultValue={clients[0].name}
                {...register("name", { required: true, maxLength: 15 })}
              ></input>
              <h6>Фамилия</h6>
              <input
                defaultValue={clients[0].surname}
                {...register("surname")}
              ></input>
              <h6>Отчество</h6>
              <input
                defaultValue={clients[0].patronymic}
                {...register("patronymic")}
              ></input>
              <h6>email</h6>
              <input
                defaultValue={clients[0].email}
                {...register("email")}
              ></input>
              <h6>Номер телефона</h6>
              <input
                defaultValue={clients[0].phone}
                {...register("phone")}
              ></input>
              <h6>Адрес доставки</h6>
              <input
                defaultValue={clients[0].address}
                {...register("address")}
              ></input>
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
    </>
  );
}
