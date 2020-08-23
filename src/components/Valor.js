import React from 'react';
import './Valor.css';
import RedLine from '../assets/vetores/linha-red.png';
import VerticalLine from '../assets/vetores/line-vertical.png';

function Valor() {
  return (
    <section className="Valor" id="Valor">
      <div className="container">
        <div className="valor-wrapper">
          <div className="valor-blue-box-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <div className="valor-blue-box">
              <div className="valor-blue-box-up">
                <p className="up-title">
                Curso inspirado no livro Customer Success, 
                <br/>
                o Sucesso das Empresas Focadas em Clientes.
                </p>
                <p className="up-preco">
                  À vista: de <span className="valor-riscado">R$ 1.199,00</span>
                  <br/>
                  por R$ 599,00
                </p>
                <p className="up-preco em-ate">
                  em até <span className="valor-destaque">6x R$ 99,83</span> sem juros
                </p>
              </div>
              <img className="vertical-line" src={VerticalLine} alt=""/>
              <div className="valor-blue-box-down">
                <p className="down-title">
                <strong>Bônus:</strong> ganhe o livro Customer Success, 
                <br/>
                o Sucesso das Empresas Focadas em Clientes.
                </p>
                <p className="down-subtitle">
                Acesso à Comunidade Customer Success School.
                </p>
              </div>
            </div>
          </div>
          <div className="investimento-wrapper">
            <h2>
              Qual o valor 
              <br/>
              do investimento?
            </h2>
            <p className="investimento-title">
            O valor real deste conteúdo vai bem além do sugerido. 
            Ele contém mais de 300h de estudo e produção, e mais de 200 referências 
            bibliográficas compiladas, em aulas direcionadas para o seu conhecimento 
            e evolução profissional.
            </p>
            <a className="investimento-btn" href="https://liveschool.centroeuropeu.com.br/cursos/manual-customer-success/">
              Quero comprar agora
            </a>
            <p className="investimento-subtitle">
              Satisfação Garantida
              <br/>
              Checkout Seguro
              <br/>
              Plataforma Renomada
              <br/>
              Privacidade Protegida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valor;