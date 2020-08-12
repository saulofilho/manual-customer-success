import React from 'react';
import './Idealizador.css';
import CSWeek from '../assets/images/logo-csweek.png';
import RD from '../assets/images/logo-rdsummit.png';
import TDC from '../assets/images/logo-tdc.png';
import Livro from '../assets/images/livro-red.png';
import Hiram from '../assets/images/img-hiram-damin.png';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';

function Idealizador() {
  return (
    <section className="Idealizador">
      <div className="idealizador-wrapper container">
        <div className="idealizador-item">
          <div className="ide-photo">
            <img className="hiram-photo" src={Hiram} alt=""/>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="ide-text">
            <img 
              className="white-line" 
              src={WhiteLine} 
              alt="linha branca animada"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
              <h2>
                Idealizador 
                <br/>
                do Curso
              </h2>
              <p className="autor-livro">
                Autor do livro “Customer Success o Sucesso das Empresas Focadas em 
                Clientes” , atua desde 2005 no mercado de comunicação e tecnologia. 
                A partir de 2015 começa a atuar na área de Customer Success onde 
                atendeu mais de 250 empresas no Brasil e no exterior.
              </p>
              <p className="autor-palestra">
                Lugares que já palestrou:
              </p>
              <div className="lugares-row">
                <img className="csweek" src={CSWeek} alt=""/>
                <img src={RD} alt=""/>
                <img src={TDC} alt=""/>
              </div>
          </div>
        </div>
        <div className="idealizador-item" id="Livro">
          <div className="ide-text">
            <img 
              className="white-line" 
              src={WhiteLine} 
              alt="linha branca animada"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <h2>
              Sobre o livro que
              <br/>
              inspirou o curso
            </h2>
            <p className="autor-livro">
              Com uma média de 4 livros vendidos ao dia e chegando as 1.000 
              cópias vendidas, o livro “Customer Success o Sucesso das Empresas 
              Focadas em Clientes” é o primeiro livro a falar de CS com foco no 
              mercado brasileiro. A metodologia é resultado de anos do dia a dia 
              do autor trabalhando com clientes em todo o Brasil, além de pesquisas 
              com diversas empresas e profissionais que entregam sucesso aos seus
              clientes todos os dias. 
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="ide-livro">
            <img src={Livro} alt="capa do livro customer success"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Idealizador;