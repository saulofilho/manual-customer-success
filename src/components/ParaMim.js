import React from 'react';
import './ParaMim.css';
import RedLine from '../assets/vetores/linha-red.png';

function ParaMim() {
  return (
    <section className="ParaMim">
      <div className="container">
        <div className="paramim-wrapper">
          <div className="para-title-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
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
              Esse é um curso de base e estratégia em Customer Success. 
              Hiram Damin faz um percurso por todos os pontos, desde a mentalidade 
              de CS até a atuação em dashboards dentro da sua empresa. Não importa 
              seu nicho de mercado, se você busca uma vaga no setor ou é da área de 
              Produto, Marketing, Vendas e CS, esse curso é feito para você.
            </p>
          </div>
          <div className="para-texts-wrapper">
            <div className="numbers-texts">
              <div className="texts">
                <div className="num-txt-wrap">
                  <p className="text para-texts-title">
                    Estes são os 4 principais tipos
                    <br />
                    de alunos em nossas turmas:
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/01</p>
                  <p className="text">
                    <strong>Startups</strong> que buscam implementar a metodologia de 
                  Sucesso do Cliente.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/02</p>
                  <p className="text">
                    <strong>Consultores</strong> e <strong>agências</strong> com foco em Customer Centric.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/03</p>
                  <p className="text">
                    Profissionais de <strong>Customer Success</strong> que querem aprimorar suas técnicas ou querem entrar no mercado de trabalho.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/04</p>
                  <p className="text padding-zero">
                    Profissionais em geral que querem <strong>melhorar seu atendimento</strong> com o sucesso do cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParaMim;