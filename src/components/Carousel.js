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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="Carousel">
      <div className="car-texts-wrapper container">
        <div className="texts">
          <h2 className="display-none-500">
            Da entrada da conta até
            <br />
            o ciclo final!
          </h2>
          <h2 className="display-none display-block-500">
            Da entrada da conta 
            <br />
            até o ciclo final!
          </h2>
          <p className="texts-title">
            Você irá aprender todas as principais técnicas para
            <br />
            atuar como um Customer Success
          </p>
          <p className="texts-subtitle display-none-500">
            Nossa missão é contribuir de forma decisiva nas suas conquistas: 
            <br />
            uma nova vaga, uma promoção ou a aceleração dos seus negócios e o 
            <br />
            reconhecimento pelos seus resultados com foco no sucesso dos clientes.
          </p>
          <p className="texts-subtitle display-none display-block-500">
            Nossa missão é contribuir de forma decisiva nas suas 
            <br />
            conquistas: uma nova vaga, uma promoção ou a 
            <br />
            aceleração dos seus negócios e o reconhecimento 
            <br />
            pelos seus resultados com foco no sucesso dos 
            <br />
            clientes.
          </p>
        </div>
        <div className="lines">
          <img 
            className="blue-line" 
            src={BlueLine} 
            alt="linha azul animada"
          />
          <img 
            className="blue-line" 
            src={BlueLine} 
            alt="linha azul animada"
          />
        </div>
      </div>
      <div className="container-carousel">
        <Slider {...settings}>
          <div>
            <div className="container-box svg-bau">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 44"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M1,17V39a4,4,0,0,0,4,4H55a4,4,0,0,0,4-4V13A12,12,0,0,0,47,1H13A12,12,0,0,0,1,13H25a1.88,1.88,0,0,1,2-2h6a1.87,1.87,0,0,1,2,2H55"/><path className="cls-1" d="M35,17v5a5,5,0,0,1-10,0V17H5V39H55V17H29"/><line className="cls-1" x1="30" y1="21" x2="30" y2="22"/><line className="cls-1" x1="9" y1="27" x2="5" y2="27"/><line className="cls-1" x1="23" y1="33" x2="11" y2="33"/><line className="cls-1" x1="39" y1="31" x2="35" y2="31"/><line className="cls-1" x1="55" y1="27" x2="47" y2="27"/><line className="cls-1" x1="21" y1="5" x2="17" y2="5"/><line className="cls-1" x1="9" y1="9" x2="1.68" y2="9"/><line className="cls-1" x1="57.31" y1="7" x2="45" y2="7"/></g></g></svg>
              <p className="slider-title">
                A mentalidade de Customer Success
              </p>
              <p className="slider-subtitle">
              Veja como Customer Success não é uma profissão, mas sim uma mentalidade que irá mudar empresas e mercados
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60.05"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M15,52.14,5,54.89c-2.61.66-4-1.68-4-3.89V23l2-2L1,19V13.48C1,11.28,2.78,9.7,5,9L19,5l6,2.18"/><path className="cls-1" d="M19,9V51l2.25.88L24,50.33l.72,2.75L41,59l14-4c2.23-.69,4-1.79,4-4V47l-2-2,2-2V13c0-2.21-1-4.55-4-3.87L41,13V55"/><polyline className="cls-1" points="23 43 27 39 31 43"/><polyline className="cls-1" points="45 43 47 41 49 43"/><polyline className="cls-1" points="47 31 49 29 51 31"/><polyline className="cls-1" points="51 27 53 25 55 27"/><polyline className="cls-1" points="29 41 33 37 37 41"/><polyline className="cls-1" points="29 15 29 1 41 1 39 5 41 9 33 9"/><path className="cls-1" d="M29,19S25,37,13,37C7,37,1,31,1,31"/></g></g></svg>
              <p className="slider-title">
              O Profissional de Customer Success
              </p>
              <p className="slider-subtitle">
              Descubras as habilidades técnicas e psicológicas de um Customer Success e como desenvolver cada uma delas.
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 59"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M59,57.92A5.89,5.89,0,0,1,58,58a4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,4.33,4.33,0,0,1-4-2,4.33,4.33,0,0,1-4,2,5.8,5.8,0,0,1-1-.08"/><path className="cls-1" d="M6,52c-3-2-5-3.58-5-8V36H4c2,0,2,4,4,4H45a6.1,6.1,0,0,0,6-6V30a4.06,4.06,0,0,1,4-4h4v3c0,1-2,1-2,2v9c0,8-4,10-8,12"/><line className="cls-1" x1="27" y1="36" x2="27" y2="34"/><line className="cls-1" x1="27" y1="2" x2="27"/><line className="cls-1" x1="21" y1="44" x2="17.4" y2="47.6"/><path className="cls-1" d="M17.41,47.59a2,2,0,0,0-2.82,0c-.18.17-.83.82-1,1a2,2,0,0,0,2.82,2.82c.18-.17.83-.82,1-1A2,2,0,0,0,17.41,47.59Z"/><line className="cls-1" x1="31" y1="44" x2="27.4" y2="47.6"/><path className="cls-1" d="M27.41,47.59a2,2,0,0,0-2.82,0c-.18.17-.83.82-1,1a2,2,0,0,0,2.82,2.82c.18-.17.83-.82,1-1A2,2,0,0,0,27.41,47.59Z"/><line className="cls-1" x1="41" y1="44" x2="37.4" y2="47.6"/><path className="cls-1" d="M37.41,47.59a2,2,0,0,0-2.82,0c-.18.17-.83.82-1,1a2,2,0,0,0,2.82,2.82c.18-.17.83-.82,1-1A2,2,0,0,0,37.41,47.59Z"/><line className="cls-1" x1="23" y1="18" x2="13" y2="24"/><line className="cls-1" x1="13" y1="18" x2="23" y2="24"/><path className="cls-1" d="M31,16c0-6,6-10,6-10s0,18,7,28H9C3,4,27,2,27,2c0,13.06,1.33,22.13,4,28.28"/></g></g></svg>
              <p className="slider-title">
              O dia a dia 
              <br/>
              na área
              </p>
              <p className="slider-subtitle">
              Como atuar no dia a dia, dashboards, o que o mercado procura em um CS e como atuar em alta performance.
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.69 59.67"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M8.39,19.89C5.45,24.15,1,33.43,1,50.72c0,4,7.84,8,24.86,8s24.86-3.94,24.86-8c0-25.86-9.95-33.81-9.95-33.81"/><path className="cls-1" d="M10.94,12.93S3,7,7,3s7,2,10.93,2c6,0,5-4,10-4s5,4,7.95,4,5.25-3.7,8-1c3.38,3.39-3,9-3,9"/><path className="cls-1" d="M39.1,29.11c-3-6,1.67-12.2,1.67-12.2H10.94a2,2,0,0,1,0-4H40.77c12.93,0,12.93,16.9,12.93,16.9"/><circle className="cls-1" cx="39.78" cy="29.83" r="0.99"/><circle className="cls-1" cx="53.7" cy="30.83" r="0.99"/><path className="cls-1" d="M14.92,22.87a14.48,14.48,0,0,1,1-6"/><line className="cls-1" x1="26.85" y1="18.9" x2="26.85" y2="16.91"/><path className="cls-1" d="M31.82,20.89c0-3-1-4-1-4"/><path className="cls-1" d="M25.86,52.7a94.18,94.18,0,0,1-13.92-1"/><path className="cls-1" d="M6,50.72a14.08,14.08,0,0,1-5-3"/><path className="cls-1" d="M45.74,50.72a12.71,12.71,0,0,0,4.84-3"/></g></g></svg>
              <p className="slider-title">
              Técnicas práticas 
              <br/>
              de resgate de contas
              </p>
              <p className="slider-subtitle">
              As principais objeções do mercado com dicas práticas para reduzir as taxas de cancelamento e aumentar a sua performance.
              </p>
            </div>
          </div>
          <div>
            <div className="container-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M35,33v5a5,5,0,0,1-10,0V33H5V55H55V33H29"/><line className="cls-1" x1="30" y1="37" x2="30" y2="38"/><line className="cls-1" x1="9" y1="43" x2="5" y2="43"/><line className="cls-1" x1="23" y1="49" x2="11" y2="49"/><line className="cls-1" x1="39" y1="47" x2="35" y2="47"/><line className="cls-1" x1="55" y1="43" x2="47" y2="43"/><path className="cls-1" d="M39,7H54a1,1,0,0,1,1,1V29H1V7A4,4,0,0,1,5,3H25V1H35V3H55a4,4,0,0,1,4,4V55a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V33"/><path className="cls-1" d="M5,25V8A1,1,0,0,1,6,7H21"/><line className="cls-1" x1="21" y1="21" x2="10" y2="21"/><path className="cls-1" d="M23,29c2-3,3-8,3-8h1V17H9v4h1s1,5,3,8"/><path className="cls-1" d="M25,3V7a1.87,1.87,0,0,0,2,2h6a1.87,1.87,0,0,0,2-2V3"/><polyline className="cls-1" points="51 29 51 25 45 25"/><polyline className="cls-1" points="51 21 41 21 41 25 39 25 39 29"/><polyline className="cls-1" points="48 17.73 51 16 49 12.54 40.34 17.54 42.34 21"/><circle className="cls-1" cx="35" cy="21" r="2"/><circle className="cls-1" cx="31" cy="15" r="2"/><circle className="cls-1" cx="13" cy="15" r="2"/><path className="cls-1" d="M35,29a2,2,0,0,0-4,0"/><path className="cls-1" d="M23,17a2,2,0,0,0-4,0"/><line className="cls-1" x1="30" y1="7" x2="30" y2="9"/></g></g></svg>
              <p className="slider-title">
              Métricas em Customer Success
              </p>
              <p className="slider-subtitle">
              A principais métricas para medir a performance na área até as ações individuais. explicadas de forma simples e prática.
              </p>
            </div>
          </div>
        </Slider>

      </div>
    </section>
  );
}

export default Carousel;