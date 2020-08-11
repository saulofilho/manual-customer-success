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
            <img className="red-line" src={RedLine} alt=""/>
            <div className="valor-blue-box">
              <div className="valor-blue-box-up">
                <p className="up-title">
                  Curso inspirado no livro Customer 
                  <br/>
                  Success o Sucesso das 
                  <br/>
                  Empresas Focadas em Clientes
                </p>
                <p className="up-preco">
                  de R$799,00 por 599,00
                  <br/>
                  Parcelado à vista
                </p>
                <p className="up-preco-12">
                  Em até 12x de R$ 59 ,90
                </p>
              </div>
              <img className="vertical-line" src={VerticalLine} alt=""/>
              <div className="valor-blue-box-down">
                <p className="down-title">
                  De bônus ganhe:
                </p>
                <p className="down-subtitle">
                  Livro Customer Success o Sucesso das Empresas Focadas em Clientes
                  <br/>
                  <br/>
                  Comunidade Customer Success School
                  <br/>
                  <br/>
                  Certificado de Conclusão
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
              O valor real deste conteúdo vai bem além do que precificamos. 
              <br/>
              Estudar com o Pai do Growth não tem preço e você irá 
              <br/>
              descobrir que essa é apenas uma das vantagens em estar em 
              <br/>
              nossa comunidade de Growth Masters.
            </p>
            <a className="investimento-btn" href="">
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