import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
import hero from "../../Assets/hero.png";

const Header = () => {
  return (
    <div className='grid col-2'>
      <div className='flex-col flex'>
        <div className='header-text'>
          Fast, reliable and <span>secure</span> video conferencing.
        </div>
        <div className='normal-text'>
          Hold increadible events, share knowledge, build and grow your
          community, create opportunity!
        </div>
        <div className='button-bar flex w-300 justify-between'>
          <Button
            onClickFunction={() => {}}
            label=' Create meeting'
            loading={false}
            type='primary'
          ></Button>
          <Button
            onClickFunction={() => {}}
            label=' Learn more'
            loading={false}
            type='outlined'
          ></Button>
        </div>
      </div>
      <div>
        <img src={hero} width='550px'></img>
      </div>
    </div>
  );
};

export default Header;
