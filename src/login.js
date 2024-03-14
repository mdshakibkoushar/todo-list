import React, { useState } from "react";
function Login() {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [UserErr, setUserErr] = useState("false");
  const [PassErr, setPassErr] = useState("true");
  function loginHandle(e) {
    if (User.length < 3 || Password.length < 3) {
      alert("Type Correct values");
    } else {
      alert("Successfully");
    }
    e.preventDefault();
  }
  function UserHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    
    setUser(item);
  }

  function PasswordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1> Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="User Nmae" onChange={UserHandler} />{" "}
        {UserErr ? <span>user Not Valied</span> : ""}
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="User Password"
          onChange={PasswordHandler}
        />{" "}
        {PassErr ? <span>Password Not Valied</span> : ""}
        <br></br>
        <br></br>
        <button type="Submit"> Login</button>
      </form>
    </div>
  );
}

export default Login;
