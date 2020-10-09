import React,{useContext} from 'react';
import { Link ,useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Header() {
  const {userData,setUserData}  = useContext(UserContext);
  
  const history = useHistory();
    const login = () => history.push("/login");
    const register = () => history.push("/register");
    const logout = () => {
      setUserData({
        token: undefined,
        user:undefined
      });
      localStorage.setItem("auth-token","");
    };


  return (
    <div className="header">
        <div className="header-left">
            <div className="header-button">PROFILE</div>
            <div className="header-button">CONTACT</div>
        </div>
        <Link to="/"><div className="header-mid">Books</div></Link>
        
        <div className="header-right">
            
            {
              userData.user ? <div className="header-button" onClick={logout}>LOGOUT</div> :
                <>
                  <div className="header-button" onClick={login}>LOGIN</div>
                  <div className="header-button" onClick={register}>REGISTER</div>
                </>
            } 
            
            
        </div>
    </div>
  );
}
