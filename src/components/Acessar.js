import React from 'react';
import './Acessar.css';
import WhiteLine from '../assets/vetores/linha-white.png';

function Acessar() {
  return (
    <section className="Acessar">
      <div className="acessar-wrapper container">
        <div className="acessar-wrapper-text">
          <h1>
            O número de vagas para Customer Success é cada vez maior e as oportunidades de crescimento profissional também. Isso acontece porque cada vez mais as empresas estão focadas em clientes e crescer com eles.
          </h1>
        </div>
        <div className="acessar-wrapper-btn">
          <a href="">
            Quero acessar agora
          </a>
          <img src={WhiteLine} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default Acessar;