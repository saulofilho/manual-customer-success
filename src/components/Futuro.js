import React from 'react';
import './Futuro.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function Futuro() {
  return (
    <section className="Futuro">
      <div className="container futuro-wrapper">
        <h2 className="display-none-500">
          Customer Success não
          <br/>
          é a profissão do futuro,
          <br/>
          é a oportunidade agora!
        </h2>
        <h2 className="display-none display-block-500">
          Customer Success não
          <br/>
          é a profissão do 
          <br/>
          futuro, é a oportunidade agora!
        </h2>
        <div className="futuro-row">
          <div className="futuro-row-text">
            <p>
              <strong>Customer Success</strong> é o profissional que leva o 
              <br/>
              atendimento ao cliente 
              a um novo nível. Ele não 
              <br/>
              apenas cumpre demandas, ele leva sucesso 
              ao 
              <br/>
              cliente através de uma metodologia inovadora.
              <br/>
              <br/>
              Os profissionais que usarem a metodologia de 
              <br/>
              Sucesso do Cliente 
              não só serão destaque nas 
              <br/>
              empresas como também estarão capacitados 
              para 
              <br/>
              as <strong>novas vagas de emprego</strong>, com salários 
              <br/>
              melhores e perto das 
              grandes companhias líderes 
              <br/>
              de mercado que já aplicam essa metodologia 
              e 
              <br/>
              possuem a mentalidade certa para crescer junto com seus clientes. 
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="futuro-row-black-box-wrapper">
            <div className="futuro-row-black-box">
              <p>
                Seja parte do <strong>grupo seleto de profissionais qualificados</strong> que vão 
                se destacar entregando sucesso ao cliente com uma metodologia 
                aplicada e comprovada em milhares de empresa no Brasil e no mundo.
              </p>
            </div>
            <img 
              className="blue-line" 
              src={BlueLine} 
              alt="linha azul"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Futuro;