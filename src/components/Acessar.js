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
              O <strong>número de vagas para Customer Success</strong> é cada vez maior e as 
              oportunidades de crescimento profissional também. Isso acontece 
              porque cada vez mais as empresas estão <strong>focadas em clientes</strong> e crescer com eles.
            </p>
          </div>
          <div className="acessar-wrapper-btn">
            <a href="">
              Quero acessar agora
            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acessar;