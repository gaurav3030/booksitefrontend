import React,{useState, useContext} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Error from '../misc/Error';

export default function Login(props) {
  
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [error , setError] = useState();
  const {setUserData} = useContext(UserContext);
  const history = useHistory();
  
  const submit = async (e)=>{
    e.preventDefault();
    try{
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login/",
        {email,password}
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
  
      }); 
      localStorage.setItem("auth-token",loginRes.data.token);
      history.push("/"); 
    }catch(err){
      err.response.data.msg && setError(err.response.data.msg);
    }
    
  }
  return (
    <div>
      <div className="auth-page">
            <h2>Login</h2>
            {error && <Error message = {error} clearError={()=> setError(undefined) }/>}
            <form onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="login-pass">Password</label>
                <input id="login-pass" type="password" onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
            
        </div>
    </div>
  );
}
