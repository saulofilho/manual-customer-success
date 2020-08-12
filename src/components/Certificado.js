import React from 'react';
import './Certificado.css';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';
import Book from '../assets/images/img-hiram-damin.png';

function Certificado() {
  return (
    <section className="Certificado" id="Certificado">
      <div className="container">
        <div className="certificado-wrapper">
          <div className="certificado-img">
            <img className="book" src={Book} alt=""/>
            <img 
              className="red-line display-none-700" 
              src={RedLine} 
              alt=""
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <img 
              className="white-line display-none-700" 
              src={WhiteLine} 
              alt=""
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="certificado-text">
            <img 
              className="white-line" 
              src={WhiteLine} 
              alt=""
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <h2>
              Certificação
              <br/>
              garantida por uma 
              <br/>
              das maiores escolas 
              <br/>
              de negócios do 
              <br/>
              Brasil o Centro 
              <br/>
              Europeu com a 
              <br/>
              plataforma 
              <br/>
              MICROSOFT SCHOOL.
            </h2>
            <p className="certi-title">
              Centro Europeu é uma das referências nacionais 
              <br/>
              em educação e negócios. 
            </p>
            <p className="certi-subtitle">
              + de 50 cursos online e presenciais 
              <br/>
              + de 25.000 alunos ao longo de sua trajetória 
              <br/>
              Núcleo de Cursos Livres, em parceria com a plataforma MICROSOFT SCHOOL.
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt=""
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificado;