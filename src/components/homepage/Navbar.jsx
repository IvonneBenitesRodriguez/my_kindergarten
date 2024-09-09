import React, { useState } from 'react';
import BurgerButton from './BurgerButton';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import Responsive from '../../Responsive/Responsive';
import Button from 'react-bootstrap/Button';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const isScreenSmall = Responsive('(max-width: 768px)');

  console.log('isScreenSmall:', isScreenSmall);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <img src={logo} alt="logo" style={{ width: '88px' }} />
        <div className={`links ${isScreenSmall && clicked ? 'active' : ''}`}>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          <Link to="/location" onClick={handleClick}>
            Location
          </Link>
          <Link to="/pedagogical" onClick={handleClick}>
            Pedagogical
          </Link>
          <Link to="/photos" onClick={handleClick}>
            Photos
          </Link>
          <Link to="/appointment" onClick={handleClick}>
            Appointment
          </Link>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
          <Link to="/register" onClick={handleClick}>
            <Button variant="primary" className=" btn-register">
              Register
            </Button>{' '}
          </Link>
        </div>

        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  padding: 18px 2rem;
  background-color: #41d8bf;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: #3b50b2;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    padding-right: 8%;
    text-align: center;
    z-index: 6;
    transition: all 0.5s ease;
    display: none;
    a {
      color: #2f89b3;
      font-size: 2rem;
      display: block;
    }
    button.btn-register {
      color: #393e46;
      padding: 14px 26px;
      background: #f7ec77;
      border-radius: 13px;
      margin-right: 10px;
      margin-left: 24px;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.3rem;
        color: #393e46;
        display: inline;
        margin-left: 18px;
        font-weight: 400;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 18%;
    left: 0;
    right: 0;
    line-height: 2;
    text-align: center;
    z-index: 8;
    a {
      color: yellow;
      font-size: 2rem;
    }
  }
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #ffe3b0;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.1s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 68%;
    height: 112vh;
    z-index: 5;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
