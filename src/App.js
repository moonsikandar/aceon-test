import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import CallList from "./CallList/CallList";
import SignIn from "./Signin/SignIn";
import axios from "axios";
import DetailOfCall from "./CallList/DetailOfCall";
import  { callContext } from "./Store/store";

function App() {
  const [apiData, setApiData] = useState([]);
  const ctx = useContext(callContext);
  const loginUserHandler = async () => {
    var data = JSON.stringify({
      username: "Moon",
      password: "123123",
    });
    var config = {
      method: "post",
      url: "https://frontend-test-api.aircall.io/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return await axios(config);
  };

  useEffect(() => {
    loginUserHandler().then((t) => {
      fechingData(t.data.access_token);
    });
  }, []);
  const fechingData = (token) => {
    var config = {
      method: "get",
      url: "https://frontend-test-api.aircall.io/calls?offset=1&limit=70",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setApiData(response.data.nodes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <Header />
      {ctx.isLogin ? (
        <SignIn/>
      ) : (
        <Routes>
          <Route path="/detailofcall" element={<DetailOfCall />} />
          <Route path="/" element={<CallList data={apiData} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
