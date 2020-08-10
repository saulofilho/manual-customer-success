import React from 'react';
import './VaiAprender.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function VaiAprender() {
  return (
    <section className="VaiAprender">
      <div className="vaiaprender-wrapper container">
        <div className="vai-title-wrapper">
          <img className="red-line" src={RedLine} alt=""/>
          <h1>
            O que vai 
            <br/>
            aprender 
            <br/>
            também
          </h1>
          <img className="red-line" src={RedLine} alt=""/>
        </div>
        <div className="vai-texts-wrapper">
          <ol>
            <li>01 - Intro: Atendimento e suas experiências</li>
            <li>02 - Customer Success não é um cargo. É uma mudança de mentalidade</li>
            <li>03 - Jornada do cliente: o caminho do CS</li>
            <li>04 - Suporte: o marco zero do Customer Success</li>
            <li>05 - Onboarding ou Implementação: os primeiros passos do cliente</li>
            <li>06 - Ongoing ou Adoção: o cliente rumo ao sucesso</li>
            <li>07 - Churn: como evitar, medir e controlar a evasão de clientes?</li>
            <li>08 - Ferramentas: dicas  para o seu dia a dia</li>
            <li>09 - Métricas de Sucesso em Customer Success</li>
          </ol>
          <img className="red-line" src={RedLine} alt=""/>
        </div>
      </div>
      <img className="blue-line" src={BlueLine} alt=""/>
    </section>
  );
}

export default VaiAprender;