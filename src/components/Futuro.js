import React from 'react';
import './Futuro.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function Futuro() {
  return (
    <section className="Futuro">
      <div className="container futuro-wrapper">
        <h2>
          Customer Success não
          <br/>
          é a profissão do futuro 
          <br/>
          é a oportunidade agora!
        </h2>
        <div className="futuro-row">
          <div className="futuro-row-text">
            <p>
            Empresas que ainda não entenderam que seu cliente é o foco do crescimento podem estar com os seus dias contados. Os profissionais que usarem a metodologia de Sucesso do Cliente não só serão destaque nas empresas como também estarão capacitados para as novas vagas de emprego, com salários melhores e perto das grandes companhias líderes de mercado que já aplicam essa metodologia e possuem a mentalidade certa para crescer junto com seus clientes. Seja parte do grupo seleto de profissionais qualificados que vão se destacar entregando sucesso ao cliente com uma metodologia aplicada e comprovada em milhares de empresas no Brasil e no mundo.
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