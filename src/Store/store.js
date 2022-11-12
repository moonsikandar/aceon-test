import React, { createContext, useState } from "react";
export const callContext = createContext();

const Store = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [myData, setMyData] = useState("hi");
  return (
    <callContext.Provider value={{ myData, isLogin,setIsLogin, setMyData}}>
      {children}
    </callContext.Provider>
  );
};
export default Store;
