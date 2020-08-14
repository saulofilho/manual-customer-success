import React from 'react';
import './Hero.css';
import ImgHeader from '../assets/images/img-header.png';
import Relogio from '../assets/vetores/relogio.png';
import Chapeu from '../assets/vetores/chapeu.png';
import Calendario from '../assets/vetores/calendario.png';
import Livro from '../assets/vetores/livro.png';
import Cofre from '../assets/vetores/cofre.png';

function Hero() {

  const scrollToCertificado = () => {
    document.querySelector('#Certificado').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToLivro = () => {
    document.querySelector('#Livro').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToValor = () => {
    document.querySelector('#Valor').scrollIntoView({ behavior: 'smooth' });
  }

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
            O <strong>curso online inspirado no livro</strong>
            <br/>
            Customer Success, o Sucesso 
            <br/>
            das Empresas Focadas em Cliente
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
          <button
            onClick={() => {
              scrollToCertificado()
            }}
          >
            <div className="hero-grid-item">
              <img src={Chapeu} alt="vetor chapeu"/>
              <p>
              Certificado do Centro Europeu
              </p>
            </div>
          </button>
          <div className="hero-grid-item">
            <img src={Calendario} alt="vetor calendario"/>
            <p>
            Bônus: Material para Projetos
            </p>
          </div>
          <button
              onClick={() => {
                scrollToLivro()
              }}
            >
            <div className="hero-grid-item">
              <img src={Livro} alt="vetor livro"/>
              <p>
              Bônus: Livro do Autor na sua Casa
              </p>
            </div>
          </button>
          <button
              onClick={() => {
                scrollToValor()
              }}
            >
            <div className="hero-grid-item">
                <img src={Cofre} alt="vetor cofre porco"/>
                <p>
                De <span>R$ 1.199,00</span> por apenas 799,00  em até 6x
                </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;