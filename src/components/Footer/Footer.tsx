import "./Footer.scss";

import React from "react";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex center'>
        <div className='header-text-2 flex center'>
          Powerful Virtual Conference Platform
          <svg
            className='static'
            width='233'
            height='67'
            viewBox='0 0 533 67'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 65C204.958 -1.11277 321.05 -12.9557 532 22'
              stroke='red'
              stroke-width='4'
            />
          </svg>
        </div>
      </div>
      <p style={{ textAlign: "center", margin: "50px 0" }}>Powered By </p>
      <div className='flex center'>
        <Button label={"✨ Webstark"} type={"unstyled"} />
        &nbsp;&nbsp;&nbsp;
        <Button label={"💎 Twirfy"} type={"unstyled"} />
      </div>
    </div>
  );
};

export default Footer;
