import React from 'react';
import './ParaMim.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function ParaMim() {
  return (
    <section className="ParaMim">
      <div className="paramim-wrapper container">
        <div className="para-title-wrapper">
          <img className="red-line" src={RedLine} alt=""/>
          <img className="red-line" src={RedLine} alt=""/>
          <h2>
            Como saber se o 
            <br/>
            curso Manual do 
            <br/>
            Customer Success 
            <br/>
            é para mim?
          </h2>
          <p>
            Esse é um curso de base e estratégia em Customer Success, Hiram Damin 
            faz um percurso por todos os pontos, desde do que é a mentalidade de 
            CS até entrar em ação em dashboards dentro da sua empresa. Não importa 
            seu nicho de mercado, se você busca uma vaga no setor ou é da área de 
            Produto, Marketing, Vendas e CS, esse curso é feito para você.
          </p>
          <img className="red-line" src={RedLine} alt=""/>
        </div>
        <div className="para-texts-wrapper">
          <p>
            Estes são os 4 principais tipos 
            <br/>
            de alunos em nossas turmas:
          </p>
          <ul>
            <li>
              /01 <strong>Startups</strong> que buscam implementar a metodologia de 
              Sucesso do Cliente.
            </li>
            <li>
              /02 <strong>Consultores</strong> e <strong>agências</strong> com foco em Customer Centric
            </li>
            <li>
              /03 Profissionais de <strong>Customer Success</strong> que querem aprimorar suas técnicas ou querem entrar no mercado de trabalho.
            </li>
            <li>
              /04 Profissionais em geral que querem <strong>melhorar seu atendimento</strong> com o sucesso do cliente
            </li>
          </ul>
          <img className="red-line" src={RedLine} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default ParaMim;