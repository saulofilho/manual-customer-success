import React from 'react';
import './Idealizador.css';
import CSWeek from '../assets/images/logo-csweek.png';
import RD from '../assets/images/logo-rdsummit.png';
import TDC from '../assets/images/logo-tdc.png';
import Livro from '../assets/images/Capa_CS_DVS4.jpg';
import Hiram from '../assets/images/img-hiram-damin.png';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';

function Idealizador() {
  return (
    <section className="Idealizador">
      <div className="idealizador-wrapper container">
        <div className="idealizador-item">
          <div className="ide-photo">
            <img src={Hiram} alt=""/>
            <img src={RedLine} alt=""/>
          </div>
          <div className="ide-text">
            <h2>
              Idealizador 
              <br/>
              do Curso
            </h2>
            <p>
              Autor do livro “Customer Success o Sucesso das Empresas Focadas em 
              Clientes” , atua desde 2005 no mercado de comunicação e tecnologia. 
              A partir de 2015 começa a atuar na área de Customer Success onde 
              atendeu mais de 250 empresas no Brasil e no exterior.
            </p>
            <span>
              Lugares que já palestrou:
            </span>
            <div className="lugares-row">
              <img src={CSWeek} alt=""/>
              <img src={RD} alt=""/>
              <img src={TDC} alt=""/>
            </div>
          </div>
        </div>
        <div className="idealizador-item">
          <div className="ide-text">
            <img src={WhiteLine} alt=""/>
            <h2>
              Sobre o livro que
              <br/>
              inspirou o curso
            </h2>
            <p>
              Com uma média de 4 livros vendidos ao dia e chegando as 1.000 
              cópias vendidas, o livro “Customer Success o Sucesso das Empresas 
              Focadas em Clientes” é o primeiro livro a falar de CS com foco no 
              mercado brasileiro. A metodologia é resultado de anos do dia a dia 
              do autor trabalhando com clientes em todo o Brasil, além de pesquisas 
              com diversas empresas e profissionais que entregam sucesso aos seus
              clientes todos os dias. 
            </p>
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