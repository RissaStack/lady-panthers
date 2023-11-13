import React from 'react';
import Nav from '../Nav';
import headerImg from './headerImg.jpg';
import './style.css';
import logoImg from './logoImg.png';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header className="container-fluid">
      <div className="container text-center py-3">
        <a href="/" className="text-center">
          <img className="scaledLogo" src={logoImg} alt="logo" />
        </a>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <img className="coconinoHeader" src={headerImg} alt="space" />
    </header>
  );
};

export default Header;
