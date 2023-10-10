import React from 'react';
import Home from './home';
import Freshman from './freshman';
import Jv from './jv';
import Schedule from './schedule';
import Photogallery from './photogallery';
import Varsity from './varsity';
import {capitalize} from '../utils'
import './style.css';

const Page = ({currentPage}) => {
    const renderPage = (page) => {
        switch (page) {
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };
    return <section className="container py-4">
        <h2 className="mb-3">{currentPage}</h2>
        {renderPage(currentPage)}
    </section>
};


export default Page;