import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  '& > *': {
    margin: theme.spacing(1),
  },
}));



export default function ClientInfo({name, surname, patronymic, email, phone, address}) {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = (e) => {
e.preventDefault()

  }

    return (
        <>
        <CardContent>
          <h5>Hello</h5>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
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
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setModalActive(true)} size="small">Редактировать</Button>
        <Button size="small">Удалить</Button>
      </CardActions>
      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">Редактирование карточки клиента</div>
            <div className="card-body">
              <h6>Имя</h6>
              <input></input>
              <h6>Фамилия</h6>
              <input></input>
              <h6>Отчество</h6>
              <input></input>
              <h6>email</h6>
              <input></input>
              <h6>Номер телефона</h6>
              <input></input>
              <h6>Адрес доставки</h6>
              <input></input>
              <hr/>
              <span>
              <Button onClick={() => setModalActive(false)}
                type="submit" variant="contained" color="primary">
                  Изменить
              </Button>
            </span>
            </div>
          </div>
        </form>
      </Modal>
      </>
    )
}