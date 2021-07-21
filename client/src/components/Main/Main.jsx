import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { getUserFromServer } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Main() {
  const history = useHistory();
  console.log("history==>", history);
  const dispatch = useDispatch();

  const classes = useStyles();

  const signinHandler = () => {
    window.open("http://localhost:3001/auth/signinwithgoogle");
    dispatch(getUserFromServer(history));
  };

  return (
    <div className="hello">
      <h3>Добро пожаловать в CRM систему</h3>
      <Typography className={classes.root}>
        <GoogleButton onClick={() => signinHandler()} />
      </Typography>
    </div>
  );
}
