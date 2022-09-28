import React from 'react';
import logo from '../img/logo.png';
import arrow from '../img/arrow.png';

const NavBar = ({ scrollEvent }) => {
  return (
    <nav className={scrollEvent ? 'scrollTrue' : ''}>
      {!scrollEvent ? (
        <img src={logo} alt='logo' />
      ) : (
        <div>
          <img src={arrow} alt='arrow' />
          <span>평범한 한복데이트는 그만! 고퀄리티 한복대여 체험단 모집</span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
