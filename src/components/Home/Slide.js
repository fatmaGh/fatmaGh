import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slide = () => {
  return (
    <div className="slide">
      <Carousel fade>
        <Carousel.Item>
          <h1 className="message-accueil message-1">
            Un process de câblage automobile et aéronautique est le coeur de
            notre activité.
          </h1>
          <img
            className="d-block w-100 image-slider"
            src={accueil1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="message-accueil message-2">
            Nous importons des produits autant que nous exportons, et ce
            toujours en temps record.
          </h1>
          <img
            className="d-block w-100 image-slider"
            src={accueil2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="message-accueil message-3">
            Un personnel de très haut calibre à votre disposition.
          </h1>
          <img
            className="d-block w-100 image-slider"
            src={accueil3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
