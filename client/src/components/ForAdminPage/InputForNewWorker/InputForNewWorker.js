import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addWorkerEmail } from "../../../redux/actions/workers.action";
import { useHistory } from "react-router/";

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
