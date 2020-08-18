import React from 'react';
import './VaiAprender.css';
import RedLine from '../assets/vetores/linha-red.png';

function VaiAprender() {
  return (
    <section className="VaiAprender">
      <div className="container">
        <div className="vaiaprender-wrapper">
          <div className="vai-title-wrapper">
            <h2>
              O que vai 
              <br/>
              aprender 
              <br/>
              também
            </h2>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="vai-texts-wrapper">
            <ol>
              <li>
                <div className="vai-number"><p>01 -</p></div>
                <div className="vai-text"><strong>Intro:</strong> Atendimento e suas experiências</div>
              </li>
              <li>
                <div className="vai-number"><p>02 -</p></div> 
                <div className="vai-text"><strong>Customer Success não é um cargo.</strong> <br/> É uma mudança de mentalidade</div>
                </li>
              <li>
                <div className="vai-number"><p>03 -</p></div> 
                <div className="vai-text"><strong>Jornada do cliente:</strong> o caminho do CS</div>
                </li>
              <li>
                <div className="vai-number"><p>04 -</p></div> 
                <div className="vai-text"><strong>Suporte:</strong> o marco zero do Customer Success</div>
                </li>
              <li>
                <div className="vai-number"><p>05 -</p></div> 
                <div className="vai-text"><strong>Onboarding</strong> ou <strong>Implementação:</strong> <br/> os primeiros passos do cliente</div>
                </li>
              <li>
                <div className="vai-number"><p>06 -</p></div> 
                <div className="vai-text"><strong>Ongoing</strong> ou <strong>Adoção:</strong> o cliente rumo ao sucesso</div>
                </li>
              <li>
                <div className="vai-number"><p>07 -</p></div> 
                <div className="vai-text"><strong>Churn</strong> como evitar, <br/> medir e controlar a evasão de clientes?</div>
                </li>
              <li>
                <div className="vai-number"><p>08 -</p></div> 
                <div className="vai-text"><strong>Ferramentas:</strong> dicas  para o seu dia a dia</div>
                </li>
              <li>
                <div className="vai-number"><p>09 -</p></div> 
                <div className="vai-text"><strong>Métricas de Sucesso</strong> em Customer Success</div>
                </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VaiAprender;