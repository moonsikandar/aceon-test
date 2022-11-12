
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { callContext } from "../Store/store";
import classes from "./signin.module.css"
const SignIn = () => {
   
    const [enterEmail, setEnterEmail] = useState("");
    const [enterPassword, SetEnterPassword] = useState("");
   const ctx =  useContext(callContext)
  const emailHandler = (event) => {
    setEnterEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    SetEnterPassword(event.target.value);
  };
  const submitHandler = (event) => {
   
    event.preventDefault();
    if(enterEmail.trim()==="" && enterPassword.trim()===""){
      return;
    }
   

    ctx.setIsLogin(!ctx.isLogin);
    setEnterEmail("");
    SetEnterPassword("");
};


  return (
    <div className={classes.signin}>
      <form  className={classes.form}>
        <div>
          
          <label>User Name</label>
          <input
            type="email"
            value={enterEmail}
            placeholder="Email"
            onChange={emailHandler}
            required
          />
        </div>
        <div>
        
          <label>Password</label>
          <input
            type="password"
            value={enterPassword}
            placeholder="Password"
            onChange={passwordHandler}
            required
          />
        </div>
        
        <Link to="/"><button onClick={submitHandler}>Login</button> </Link>
      </form>
    </div>
  );
};

export default SignIn;
