import React from 'react';
import './Hero.css';
import ImgHeader from '../assets/images/img-header.png';
// import LogosPatrocinadores from '../assets/images/logos-hero.png';
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
          {/* <img src={LogosPatrocinadores} alt="logos dos patrocinadores"/> */}
          <h1>
            Manual do 
            <br/>
            Customer Success
            <br/>
            com Hiram Damin.
          </h1>
          {/* <p className="hero-subtitle">por Hiram Damin</p> */}
          <p className="display-none-500-min">
            O curso online 
            <br/>
            inspirado no livro 
            <br/>
            "Customer Success: 
            <br/>
            o sucesso das empresas 
            <br/>
            focadas em clientes" 
            <br/>
            por Hiram Damin.
          </p>
          <p className="display-none display-block-500-min display-none-576-min">
            O curso online inspirado no livro 
            <br/>
            "Customer Success: o sucesso das empresas 
            <br/>
            focadas em clientes" por Hiram Damin.
          </p>
          <p className="display-none display-block-576-min">
            O curso online inspirado no livro 
            <br/>
            "Customer Success: o sucesso das 
            <br/>
            empresas focadas em clientes" 
            <br/>
            por Hiram Damin.
          </p>
          <div className="btn-cta">
            <a href="https://liveschool.centroeuropeu.com.br/cursos/manual-customer-success/">
              Quero acessar agora
            </a>
          </div>
        </div>
        <div className="container hero-grid">
          <div className="hero-grid-item">
            <img src={Relogio} alt="vetor relogio"/>
            <p>
              5h30 de 
              conteúdo
              100%
              <br/>
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
                De <span>R$ 1.199,00</span> por apenas 599,00  em até 6x R$ 99,83
                </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;