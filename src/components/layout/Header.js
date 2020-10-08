import React from 'react';
import { Link ,useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory();
    const login = () => history.push("/login");
    const register = () => history.push("/register");

  return (
    <div className="header">
        <div className="header-left">
            <div className="header-button">PROFILE</div>
            <div className="header-button">CONTACT</div>
        </div>
        <Link to="/"><div className="header-mid">Books</div></Link>
        
        <div className="header-right">
            <div className="header-button" onClick={register}>REGISTER</div>
            
              {/* userData.user ? <div className="header-button">LOGOUT</div> : */}
                <div className="header-button" onClick={login}>LOGIN</div>
              
            
            
        </div>
    </div>
  );
}
