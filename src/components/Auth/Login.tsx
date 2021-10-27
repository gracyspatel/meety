import React from "react";
import Button from "../Button/Button";

const Login = () => {
  return (
    <div>
      <div className='center modal-header'>Continue with Meety!</div>
      <div className='flex flex-col center'>
        <input type='email' className='input' placeholder='Email'></input>
        <input type='password' className='input' placeholder='Password'></input>
        <div className='vertical-spacer' />
        <Button type={"primary"} label={"Login"} />
      </div>
    </div>
  );
};

export default Login;
