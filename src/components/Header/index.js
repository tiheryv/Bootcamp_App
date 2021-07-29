import React from 'react';
import { Link } from 'react-router-dom';
import arrowLogo from '../statics/arrow-logo.png';
import './styles.css';

function Header(props) {
  const { action } = props;
  return (
    <header>
      <nav className='header-nav'>
        <h1>Talent G</h1>
        <img className='header__logo' src={arrowLogo} alt='arrow' />
        <Link to='/'>Mi bootcamp</Link>
        <span className='header__buton' role='dialog' type='button' onClick={action}>Mi Perfil</span>
        <a href='https://www.notion.so/Globant-Bootcamp-UI-188e32982b224620a443513cccb8b69a' target='_blank' rel='noreferrer'>Documentación</a>
      </nav>
    </header>
  );
}

export default Header;
