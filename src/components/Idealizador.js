import React from 'react';
import './Idealizador.css';
import CSWeek from '../assets/images/logo-csweek.png';
import RD from '../assets/images/logo-rdsummit.png';
import TDC from '../assets/images/logo-tdc.png';
import Livro from '../assets/images/livro-red.png';
import Hiram from '../assets/images/img-hiram-damin.png';
import Lisboa from '../assets/images/logo-lisboa.png';
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
            />
          </div>
          <div className="ide-text">
              <h2>
                Idealizador 
                <br/>
                do Curso
              </h2>
              <p className="autor-livro">
                Autor do livro “Customer Success, o Sucesso das Empresas Focadas 
                em Clientes”, trabalha desde 2005 no mercado de comunicação e tecnologia. 
                A partir de 2015, começa a atuar na área de Customer Success, 
                onde já atendeu mais de 250 empresas no Brasil e no exterior. 
              </p>
              <p className="autor-palestra">
                Lugares que já palestrou:
              </p>
              <div className="lugares-row">
                <img src={RD} alt="logo patrocinador"/>
                <img src={TDC} alt="logo patrocinador"/>
                <img src={Lisboa} alt="logo patrocinador"/>
                <img className="csweek" src={CSWeek} alt="logo patrocinador"/>
              </div>
          </div>
        </div>
        <div className="idealizador-item idealizador-item-reverse" id="Livro">
          <div className="ide-text">
            <h2>
              Sobre o livro que
              <br/>
              inspirou o curso
            </h2>
            <p className="autor-livro">
              O livro “Customer Success, o Sucesso das Empresas Focadas em 
              Clientes” é o primeiro a falar de CS com foco no mercado brasileiro. 
              A metodologia foi construída pelo autor após anos de trabalho na área, 
              junto a clientes de todo o Brasil, além de pesquisas com diversas empresas 
              e profissionais que entregam sucesso aos clientes todos os dias.
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
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