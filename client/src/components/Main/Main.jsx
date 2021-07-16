import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
// import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Main() {
  // const signinHandler = () => {
  //   fetch("http://localhost:3001/auth/signinwithgoogle", {
  //     // credentials: "include",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
  // return (
  //   <Button onClick={signinHandler} variant="contained">
  //     войти
  //   </Button>
  // );
  const classes = useStyles();

  return (
    <div className="hello">
      <h3>Добро пожаловать в CRM систему</h3>
      <Typography className={classes.root}>
      <Link href="/auth/signin">
        Авторизация
      </Link>
    </Typography>
    </div>
  )
}


