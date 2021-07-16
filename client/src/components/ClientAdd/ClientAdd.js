import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getClient } from "../../redux/actions/clients.action";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

export default function ClientAdd() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch, //отслеживание содержимого инпута
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(getClient(data, history));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <br />
      <h1>Добавить клиента</h1>
      <br />
      <hr />
      {errors.name && <p>Обязательное поле, не более 15 символов</p>}
      <TextField
        label="Имя"
        type="text"
        id="standard-required"
        {...register("name", { required: true, maxLength: 15 })}
      />
      <TextField
        label="Фамилия"
        type="text"
        id="standard-required"
        {...register("surname")}
      />
      <TextField
        label="Отчество"
        type="text"
        id="standard-required"
        {...register("patronymic")}
      />
      <TextField
        label="email"
        type="email"
        id="standard-required"
        {...register("email")}
      />
      <TextField
        placeholder="..."
        defaultValue="+7"
        label="Номер телефона"
        type="text"
        id="standard-required"
        {...register("phone")}
      />
      <TextField
        label="Адрес клиента"
        type="text"
        id="standard-required"
        {...register("address")}
      />
      <br />
      <br />
      <hr />
      <br />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Добавить
        </Button>
      </div>
    </form>
  );
}
