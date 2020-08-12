import React from 'react';
import './BolaDaVez.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function BolaDaVez() {
  return (
    <section className="BolaDaVez">
      <div className="container">
        <div className="boladavez-wrapper">
          <div className="boladavez-title-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <h2>
            Porque 
            <br/>
            Customer 
            <br/>
            Success 
            <br/>
            é a bola 
            <br/>
            da vez?
            </h2>
          </div>
          <div className="blue-box">
            <p className="container">
              Uma das posições mais estratégicas das empresas que estão no top 10 
              do mercado e uma das mais buscadas pelas maiores empresas do Brasil. 
              Não é à toa que as maiores empresas do país chegaram onde estão por 
              estarem focadas em um objetivo: <strong>o sucesso dos seus clientes.</strong>
              <br/>
              <br/>
              Diariamente surgem uma novas vagas no mercado na área de <strong>Customer Success</strong> e uma das maiores dificuldades 
              dos recrutadores é a mão de obra qualificada. Gente que entende da 
              metodologia e sabe como aplicar no seu dia a dia. Uma profissão que 
              vale ouro no mercado.
            </p>
          </div>
        </div>
      </div>
      <img 
        className="blue-line" 
        src={BlueLine} 
        alt=""
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
    </section>
  );
}

export default BolaDaVez;