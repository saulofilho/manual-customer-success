import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlueLine from '../assets/vetores/linha-blue.png';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    speed: 500,
    focusOnSelect: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <section className="Carousel">
      <div className="car-texts-wrapper container">
        <div className="texts">
          <h2>
            Da entrada da conta até
            <br />
            o ciclo final.
          </h2>
          <p>
            Você irá aprender todas as principais técnicas para 
            <br />
            atuar como um Customer Success
          </p>
          <span>
            Nossa missão é que você conquiste uma nova vaga, uma promoção ou possa 
            <br />
            acelerar os seus negócios e ser reconhecido (a) por seus resultados com 
            <br />
            foco no sucesso de seus clientes.
          </span>
        </div>
        <div className="lines">
          <img src={BlueLine} alt=""/>
          <img src={BlueLine} alt=""/>
        </div>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="container-box">
              <p>
                1
                5h30 de 
                <br/>
                conteúdo
                <br/>
                on-line
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
              <p>
                2
                5h30 de 
                <br/>
                conteúdo
                <br/>
                on-line
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
              <p>
                3
                5h30 de 
                <br/>
                conteúdo
                <br/>
                on-line
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
              <p>
                4
                5h30 de 
                <br/>
                conteúdo
                <br/>
                on-line
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
              <p>
                5
                5h30 de 
                <br/>
                conteúdo
                <br/>
                on-line
              </p>
            </div>
          </div>
        </Slider>

      </div>
    </section>
  );
}

export default Carousel;