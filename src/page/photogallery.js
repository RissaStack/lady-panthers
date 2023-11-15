import React from "react";
import { Carousel } from 'react-bootstrap';

const Photogallery = () => {
    return (
        <div className="photo-container">
            <div className="photo-title">
                <h2>
                    Practice Like You Play
                </h2>
            </div>
            <div className="photo-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
                </Carousel>
            </div>
            <br></br>
            <div className="photo-title">
                <h2>
                    Work Hard, Play Hard
                </h2>
            </div>
            <div className="photo-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
                </Carousel>
            </div>
        </div>
    );
};

export default Photogallery;