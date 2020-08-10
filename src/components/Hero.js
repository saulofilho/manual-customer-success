import React from 'react';
import './Hero.css';
import ImgHeader from '../assets/images/img-header.png';
import Relogio from '../assets/vetores/relogio.png';
import Chapeu from '../assets/vetores/chapeu.png';
import Calendario from '../assets/vetores/calendario.png';
import Livro from '../assets/vetores/livro.png';
import Cofre from '../assets/vetores/cofre.png';

function Hero() {
  return (
    <section className="Hero">
      <div 
        className="hero-wrapper"
        style={{
          backgroundImage: `url(${ImgHeader})`
        }}  
      >
        <div className="container hero-text">
          <h1>
            Manual do 
            <br/>
            Customer Success
          </h1>
          <p>
            O <strong>curso inspirado no livro</strong> 
            <br/>
            Customer Success o Sucesso 
            <br/>
            das Empresas Focadas em Clientes
          </p>
          <a href="">
            Quero acessar agora
          </a>
        </div>
        <div className="container hero-grid">
          <div className="hero-grid-item">
            <img src={Relogio} alt="vetor relogio"/>
            <p>
              5h30 de 
              <br/>
              conteúdo
              <br/>
              on-line
            </p>
          </div>
          <div className="hero-grid-item">
            <img src={Chapeu} alt="vetor chapeu"/>
            <p>
              Certificado
            </p>
          </div>
          <div className="hero-grid-item">
            <img src={Calendario} alt="vetor calendario"/>
            <p>
              Material de
              <br/>
              apoio para
              <br/>
              projetos
            </p>
          </div>
          <div className="hero-grid-item">
            <img src={Livro} alt="vetor livro"/>
            <p>
              Livro do
              <br/>
              Autor
            </p>
          </div>
          <div className="hero-grid-item">
            <img src={Cofre} alt="vetor cofre porco"/>
            <p>
              De R$ 1.299,00
              <br/>
              por apenas 899
              <br/>
              em até 6x
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;