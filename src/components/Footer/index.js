import React from 'react';
import './style.css';

const Footer = () => {
    const icons = [
        {
            name: "fa-solid fa-location-dot",
            link: "https://www.google.com/maps/place/Coconino+High+School/@35.2156333,-111.6254862,17z/data=!3m1!4b1!4m6!3m5!1s0x872d8f2c7df80103:0x292b49be812dcc4f!8m2!3d35.2156289!4d-111.6229113!16s%2Fm%2F063_52k?entry=ttu"
        },
        // {
        //     name: "",
        //     link: ""
        // },
        // {
        //     name: "",
        //     link: ""
        // },
    ]
    return <footer className="d-flex justify-content-center align-items-center">
        {icons.map(icon => (
            <a href={icon.link} key={icon.name} target="_blank" rel="noreferrer" className="mx-3"><i className={icon.name}></i></a>
        ))}
    </footer>;
};

export default Footer;