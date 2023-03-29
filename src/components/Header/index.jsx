import React from 'react';
import logout from "../../images/logout.svg";
import {useNavigate} from "react-router-dom";
import './styles.css'

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('isAuth', 'false');
    navigate('auth')
  }

  return (
    <div className='header'>
      <h2>Simple Hotel Check</h2>
      <div
        className='header__logout'
        onClick={handleClick}
      >
        <div className='header__logout-text'>Выйти</div>
        <img src={logout} alt='logout'/>
      </div>
    </div>
  );
};

export default Header;