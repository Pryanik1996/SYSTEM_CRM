import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useInput from "../../hooks/inputHook"


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ClientAdd() {
  const classes = useStyles();
  const inputs = [
  useInput({ label: "Имя", type: "text" }), 
  useInput({ label: "Фамилия", type: "text" }),
  useInput({ label: "Отчество", type: "text" }),
  useInput({ label: "email", type: "text" }),
  useInput({ label: "Номер телефона", type: "text" }),
  useInput({ label: "Адрес клиента", type: "text" })];

  const initialForm = {title: ''}
const [formState, setFormState] = useState(initialForm)

const changeHandler = (e) => {
const wantedField = e.target.getAttribute('name')
const newValue = e.target.value
setFormState(setFormState(prev => ({...prev, [wantedField]: newValue})))
console.log(wantedField)
}


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {inputs.map((el, i) => (
          <TextField onChange={changeHandler} name='title' key={i} {...el.tagAttrs} value={formState.title} required id="standard-required" defaultValue="" />
        ))}
      </div>
    <button type="submit">Send</button>
    </form>
  );
}
