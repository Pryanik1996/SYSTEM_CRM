import React from "react";
import Button from "@material-ui/core/Button";

export default function Main() {
  const signinHandler = () => {
    fetch("http://localhost:3001/auth/signinwithgoogle", {
      // credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <Button onClick={signinHandler} variant="contained">
      войти
    </Button>
  );
}
