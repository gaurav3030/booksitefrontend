import React,{useState , useEffect} from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Axios from "axios";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import "./style.css";
import UserContext from "./context/UserContext";

export default function App() {
  const[userData,setUserData] = useState({
    token:undefined,
    user:undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if( token===null ){
        localStorage.setItem("auth-token", "");
        token="";
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        {headers:{"x-auth-token":token}}
      );
      if(tokenResponse.data){
        const userRes = await Axios.get(
          "http://localhost:5000/users/",
          {headers:{"x-auth-token":token}}
        );
        setUserData({
          token,
          user:userRes.data
        })
      }
    };
    checkLoggedIn();

  },[]);



  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{userData,setUserData}}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login"  component={Login}/>
            <Route path="/register"  component={Register}/>
          </Switch>
        </UserContext.Provider>
      
      </BrowserRouter>
    </>
  );
}
