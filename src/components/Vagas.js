import React from 'react';
import './Vagas.css';

function Vagas() {
  return (
    <section className="Vagas">
      <div className="container vagas-wrapper">
        <div className="vagas-card">
          <p className="vagas-card-title">
            title
          </p>
          <p className="vagas-card-subtitle">
            subtitle
          </p>
          <p className="vagas-card-about">
            about
          </p>
          <a href="">
            Quero me cadastrar
          </a>
        </div>
        <img src="" alt="" className="blue-line"/>
        <h1>
          Mais de 500 vagas* para Customer Success oferecidas em todo o Brasil. Com salários chegando até R$15.000,00** 
          Fontes: *LinkedIn e **Catho
        </h1>
      </div>
    </section>
  );
}

export default Vagas;