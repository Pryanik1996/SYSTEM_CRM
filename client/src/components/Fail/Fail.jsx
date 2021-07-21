// import { useState } from "react";
import GoogleButton from "react-google-button";

export default function Fail() {
  // const [fail, setFail] = useState("");
  // try {
  //   const response = await fetch("http://localhost:3001/google/failure");
  //   if (response.status === 200) {
  //     setFail("Вам придется обратиться к администратору =/");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  const signinHandler = () => {
    window.open("http://localhost:3001/auth/signinwithgoogle");
    // dispatch(getUserFromServer(history));
  };
  return (
    <>
      <h5>
        Возможно, у Вас нет прав доступа :( <br></br> Обратитесь к
        администратору
      </h5>
      <GoogleButton onClick={() => signinHandler()} />
    </>
  );
}
