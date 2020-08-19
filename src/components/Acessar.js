import React from 'react';
import './Acessar.css';
import WhiteLine from '../assets/vetores/linha-white.png';

function Acessar() {
  return (
    <section className="Acessar">
      <div className="container">
        <div className="acessar-wrapper">
          <div className="acessar-wrapper-text">
            <p>
              O número de vagas para Customer Success é cada vez maior e as 
              oportunidades de crescimento profissional também. Isso acontece 
              porque, cada vez mais, as empresas estão focadas em clientes e crescer com eles.
            </p>
          </div>
          <div className="acessar-wrapper-btn">
            <a href="https://liveschool.centroeuropeu.com.br/cursos/manual-customer-success/">
              Quero acessar agora
            </a>
            <img 
              className="white-line" 
              src={WhiteLine} 
              alt="linha branca animada"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acessar;