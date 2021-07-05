import React, { useState } from "react";
import Axios from "axios";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="text"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />
      <button onClick={register}> Register </button>
    </div>
  );
}
