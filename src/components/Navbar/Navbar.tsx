import React from "react";
import Button from "../Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='logo'>Meety</div>
      <div className='flex w-200 justify-between'>
        <div>
          <Button type='outlined' label='Log In' loading={false} />
        </div>
        <div>
          <Button type='primary' label='Sing Up' loading={false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
