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
              conteúdo
              on-line
            </p>
          </div>
          <a href="#Certificado">
            <div className="hero-grid-item">
              <img src={Chapeu} alt="vetor chapeu"/>
              <p>
                Certificado
              </p>
            </div>
          </a>
          <div className="hero-grid-item">
            <img src={Calendario} alt="vetor calendario"/>
            <p>
              Material de
              apoio para
              projetos
            </p>
          </div>
          <a href="#Livro">
            <div className="hero-grid-item">
              <img src={Livro} alt="vetor livro"/>
              <p>
                Livro do
                Autor
              </p>
            </div>
          </a>
          <a href="#Valor">
            <div className="hero-grid-item">
                <img src={Cofre} alt="vetor cofre porco"/>
                <p>
                  De R$ 1.299,00
                  por apenas 899
                  em até 6x
                </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;