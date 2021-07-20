import {
  CardHeader,
  Typography,
  IconButton,
  Avatar,
  Collapse,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InputForNewWorker from "../InputForNewWorker/InputForNewWorker";
import { useDispatch, useSelector } from "react-redux";
import { allworkers, changeAdmin } from "../../../redux/actions/workers.action";

import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import ChooseAdmin from "./ChooseAdmin/ChooseAdmin";

// const IOSSwitch = withStyles((theme) => ({
//   root: {
//     width: 42,
//     height: 26,
//     padding: 0,
//     margin: theme.spacing(1),
//   },
//   switchBase: {
//     padding: 1,
//     '&$checked': {
//       transform: 'translateX(16px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         backgroundColor: '#52d869',
//         opacity: 1,
//         border: 'none',
//       },
//     },
//     '&$focusVisible $thumb': {
//       color: '#52d869',
//       border: '6px solid #fff',
//     },
//   },
//   thumb: {
//     width: 24,
//     height: 24,
//   },
//   track: {
//     borderRadius: 26 / 2,
//     border: `1px solid ${theme.palette.grey[400]}`,
//     backgroundColor: theme.palette.grey[50],
//     opacity: 1,
//     transition: theme.transitions.create(['background-color', 'border']),
//   },
//   checked: {},
//   focusVisible: {},
// }))(({ classes, ...props }) => {
//   return (
//     <Switch
//       focusVisibleClassName={classes.focusVisible}
//       disableRipple
//       classes={{
//         root: classes.root,
//         switchBase: classes.switchBase,
//         thumb: classes.thumb,
//         track: classes.track,
//         checked: classes.checked,
//       }}
//       {...props}
//     />
//   );
// });

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ListOfWorkers() {
  const dispatch = useDispatch();
  const { workers } = useSelector((state) => state);
  useEffect(() => {
    fetch("http://localhost:3001/admin/workers", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log('!!!!!88888=>', data));
  }, []);
  const classes = useStyles();
  const ChangeAdmin = async (e) => {
    e.preventDefault();
    const idcard = e.target.id;

    const response = await fetch(
      `http://localhost:3001/admin/workers/${idcard}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          idcard,
        }),
        credentials: "include",
      }
    );
    const result = await response.json();
    console.log(result);
    await dispatch(changeAdmin(result));
  };

  return (
    <>
      <InputForNewWorker />
      <Card className={classes.root}>
        {workers?.map((e) => (
          <>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={e.name ? e.name : "Имя не указано"}
              subheader={e.email}
            />
            <CardMedia
              className={classes.media}
              image={e.picture}
              title="Paella dish"
            />
            <ChooseAdmin isAdmin={e.isAdmin} id={e._id} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <button
                  onClick={ChangeAdmin}
                  id={e._id}
                  className="btn btn-primary"
                >
                  Status:{e.isAdmin ? "Администратор" : "Пользователь"}
                </button>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </>
        ))}
      </Card>
    </>
  );
}
