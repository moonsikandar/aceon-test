import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { callContext } from "../Store/store";
import classes from "./header.module.css";

const Header = () => {
  const [logOut, setLogOut] = useState(false);
  const ctx = useContext(callContext);

  const loginHandler = () => {
    ctx.setIsLogin(true);
    setLogOut(!logOut);
  };
  return (
    <div className={classes.header}>
      <h2>LOGO</h2>
      {ctx.isLogin?"": <Button onClick={loginHandler}> Log Out</Button>}
    </div>
  );
};

export default Header;
