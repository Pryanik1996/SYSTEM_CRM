import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addWorkerEmail } from "../../../redux/actions/workers.action";
import { useHistory } from "react-router/";



// import nodemailer from 'nodemailer';

// const smtp = nodemailer.createTransport({
//   // host: 'smtp.someprovider.com',
//   // port: 587,
//   service: "gmail",
//   auth: {
//     user: '2same1as2@gmail.com',
//     pass: 'Zbc320098',
//   },
// });

// smtp.sendMail({
//   to: 'mt9686@inbox.ru',
//   from: '2same1as2@gmail.com',
//   subject: 'Testing Email Sends',
//   html: '<p>Sending some HTML to test.</p>',
// });

// export default (options = {}) => {
//   return smtp.sendMail(options);
// }











const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

export default function InputForNewWorker() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  

  const {
    register,
    handleSubmit,
    watch, //отслеживание содержимого инпута
    formState: { errors, submitCount },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addWorkerEmail(data, history));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
        <br />
        <h1>Добавить сотрудника</h1>
        <hr />
        <TextField
          label="email"
          type="email"
          id="standard-required"
          {...register("email")}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Отправить
        </Button>
      </div>
    </form>
  );
}
