import React from "react";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <div>
      <div className='center modal-header'>Welcome to Meety!</div>
      <div className='flex flex-col center'>
        <input type='text' className='input' placeholder='Display Name'></input>
        <input type='email' className='input' placeholder='Email'></input>
        <input type='password' className='input' placeholder='Password'></input>
        <div className='vertical-spacer' />
        <Button type={"outlined"} label={"🚀 Sign Up"} />
      </div>
    </div>
  );
};

export default SignUp;
