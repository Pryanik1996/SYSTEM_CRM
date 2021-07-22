import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { getUserFromServer } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import "./css/main.css"
// import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { FormHelperText } from "@material-ui/core";

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
    // dispatch(getUserFromServer(history));
  };

  return (
    <>
    <div className="home">
    <div className="main">
      <div className="sign">
    <span className="fast-flicker">CRM</span> &nbsp;<span className="flicker">S</span>YSTEM
      </div>
    <div className="hello">
    <h2 style={{marginTop:'40px'}}>FOR YOUR BUSINESS</h2>
      <Typography className={classes.root}>
        <div className="googleButton">
          <GoogleButton className="googleBut" type="light" label="Войти через Google" style ={{zIndex:8000, borderRadius:5, marginBottom:'40px', opacity:0.4, backgroundColor:'grey', color:'black', fontSize:'1rem', fontFamily:'Girloy',  boxShadow:"yellow"}} onClick={() => signinHandler()} />
        </div>
      </Typography>
    <div className="hero">
      <h1 style={{zIndex:8000}} className="hero-title">
    Мысли  По-Новому
    <br/>
    Работай По-Новому
    <br/>
    Управляй По-Новому</h1>
    <a href="/" className="hero-scroll" style={{zIndex:8000}}>scroll down</a>
    </div>
    </div>

    

    </div>
   
    <main>
      <div className="container">
        <section className="intro">

      <div className="article" data-number="01">
        <div className="article-text">
      <div className="article-subtitle"> Get Started</div>
      <div className="article-title">Монохроматические Цвета</div>
      <p>
          Жёлтый цвета по шестнадцатеричному коду цвета #ffff00 / #ff0 является оттенком желто-зеленый. В
          модели цвета RGB #ffff00 составляет 100% красного, 100% зеленого и 0% синего. 
          В цветовом пространстве HSL #ffff00 имеет оттенок 60° (градусов), 100% насыщенность и 50% светлости.
      </p>
        </div>
        <div className="article-img">
          <div className="art-img"></div>
        </div>
      </div>
        </section>
      </div>
    </main>
    <footer className="footer">
    </footer>
    </div>
    </>
  );
}
