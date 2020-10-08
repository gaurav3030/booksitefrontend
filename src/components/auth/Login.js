import React from 'react';

export default function Login(props) {
  return (
    <div>
      <div className="auth-page">
            <h2>Login</h2>
            {/* {props.error && <Error message = {props.error} clearError={()=> props.setError(undefined) }/>} */}
            <form>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" />
                <label htmlFor="login-pass">Password</label>
                <input id="login-pass" type="password" />
                <input type="submit" value="Login"/>
            </form>
            
        </div>
    </div>
  );
}
