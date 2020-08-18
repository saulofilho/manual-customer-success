import React from 'react';
import './Vagas.css';
import BlueLine from '../assets/vetores/linha-blue.png';

function Vagas() {
  return (
    <section className="Vagas">
      <div className="vagas-wrapper container">
        <div className="vagas-card-wrapper">
          <div className="vagas-card">
            <p className="vagas-card-title">
              Customer Success Manager
            </p>
            <p className="vagas-card-subtitle">
              De R$ 10.001.00 a R$ 15.000.00
              <br/>
              1 vaga: São Paulo - SP (1)
              <br/>
              Publicada em 30/07
            </p>
            <p className="vagas-card-about">
              Ser especialista em criar relacionamentos e entender as necessidades 
              dos clientes, além de ser tecnicamente capaz de garantir que eles 
              estejam usando o produtor com a máxima...
              <br/>
              <br/>
            </p>
            <p className="vagas-card-about catho">
              <strong>Fonte:</strong> Catho
            </p>
          </div>
          <img 
            src={BlueLine} 
            alt="" 
            className="blue-line"
          />
        </div>
        <div className="vagas-text-wrapper">
          <img 
            src={BlueLine} 
            alt="" 
            className="blue-line"
          />
          <h2>
            Mais de 500 vagas* 
            <br/>
            para Customer 
            <br/>
            Success oferecidas 
            <br/>
            em todo o Brasil. 
          </h2>
          <p className="vagas-salarios">
            Com salários chegando até R$15.000,00!**
          </p>
          <p className="vagas-fontes">
            Fontes: *LinkedIn e **Catho
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vagas;