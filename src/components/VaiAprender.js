import React from 'react';
import './VaiAprender.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function VaiAprender() {
  return (
    <section className="VaiAprender">
      <div className="container">
        <div className="vaiaprender-wrapper">
          <div className="vai-title-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <h2>
              O que vai 
              <br/>
              aprender 
              <br/>
              também
            </h2>
          </div>
          <div className="vai-texts-wrapper">
            <ol>
              <li><span>01 -</span> <strong>Intro:</strong> Atendimento e suas experiências</li>
              <li><span>02 -</span> <strong>Customer Success não é um cargo.</strong> É uma mudança de mentalidade</li>
              <li><span>03 -</span> <strong>Jornada do cliente:</strong> o caminho do CS</li>
              <li><span>04 -</span> <strong>Suporte:</strong> o marco zero do Customer Success</li>
              <li><span>05 -</span> <strong>Onboarding</strong> ou <strong>Implementação:</strong> os primeiros passos do cliente</li>
              <li><span>06 -</span> <strong>Ongoing</strong> ou <strong>Adoção:</strong> o cliente rumo ao sucesso</li>
              <li><span>07 -</span> Churn: como evitar, medir e controlar a evasão de clientes?</li>
              <li><span>08 -</span> <strong>Ferramentas:</strong> dicas  para o seu dia a dia</li>
              <li><span>09 -</span> <strong>Métricas de Sucesso</strong> em Customer Success</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VaiAprender;