import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { getOrder } from "../../redux/actions/order.action";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectComponent() {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");
  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   const value = event.target.value
  //   console.log(event.target.value)
  //   dispatch(getOrder(value));
  // };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Статус заказа</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        // {...register("status")}

      >
        <MenuItem value={"Ожидание поставки"}>Ожидание поставки</MenuItem>
        <MenuItem value={"В работе"}>В работе</MenuItem>
        <MenuItem value={"Собран"}>Собран</MenuItem>
        <MenuItem value={"Доставлен"}>Доставлен</MenuItem>
        <MenuItem value={"Рекламация"}>Рекламация</MenuItem>

      </Select>
      <FormHelperText>Выберите статус заказа</FormHelperText>
    </FormControl>
  );
}
