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
            />
            <h2 className="display-none-500">
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
            <h2 className="display-none display-block-500">
            Porque Customer 
            <br/>
            Success é a 
            <br/>
            bola 
            da vez?
            </h2>
          </div>
          <div className="blue-box">
            <p className="container">
              Uma das posições estratégicas das empresas que estão no Top 10 do 
              mercado e uma das mais buscadas pelas maiores empresas do Brasil. 
              Não é à toa que as maiores empresas do país chegaram onde estão por 
              estarem focadas em um objetivo: <strong>o sucesso dos seus clientes.</strong>
              <br/>
              <br/>
              Diariamente surgem novas vagas no mercado na área de <strong>Customer Success</strong> e uma das maiores dificuldades dos recrutadores é a mão de obra qualificada. 
              Gente que entende da metodologia e sabe como aplicá-la no dia a dia. 
              É uma profissão que hoje vale ouro no mercado!
            </p>
          </div>
        </div>
      </div>
      <img 
        className="blue-line" 
        src={BlueLine} 
        alt="linha azul"
      />
    </section>
  );
}

export default BolaDaVez;