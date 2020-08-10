import React from 'react';
import './Certificado.css';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';
import Book from '../assets/images/img-hiram-damin.png';

function Certificado() {
  return (
    <section className="Certificado">
      <div className="container">
        <div className="certificado-wrapper">
          <div className="certificado-img">
            <img className="book" src={Book} alt=""/>
            <img className="red-line" src={RedLine} alt=""/>
            <img className="white-line" src={WhiteLine} alt=""/>
          </div>
          <div className="certificado-text">
            <img className="white-line" src={WhiteLine} alt=""/>
            <h2>
              Certificação garantida por uma das maiores escolas de negócios do 
              Brasil o Centro Europeu com a plataforma MICROSOFT SCHOOL.
            </h2>
            <p>
              Centro Europeu é uma das referências nacionais 
              <br/>
              em educação e negócios. 
            </p>
            <span>
              + de 50 cursos online e presenciais 
              <br/>
              + de 25.000 alunos ao longo de sua trajetória 
              <br/>
              Núcleo de Cursos Livres, em parceria com a plataforma MICROSOFT SCHOOL.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificado;