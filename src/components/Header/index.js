import React from 'react';
import Nav from '../Nav';
// import headerImage from '../../assets/cover/flowers.jpg';
import './style.css'

const Header = ({pages, currentPage, setCurrentPage}) => {
    return (
        <header className="container-fluid">
            {/* <img src={headerImage} alt="purple flowers"/> */}
            <div className="container d-lg-flex justify-content-lg-between py-2">
                <h1 className="text-center">Lady Panthers Basketball</h1>
                <Nav 
                    pages={pages} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                />
            </div>
        </header>
    )
};

export default Header;