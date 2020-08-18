import React from 'react';
import './QuemConfia.css';
import Ok from '../assets/vetores/like.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function QuemConfia() {
  return (
    <section className="QuemConfia">
      <div className="container">
        <h2>
          Veja quem já deu um upgrade 
          <br/>
          na sua carreira com o curso 
          <br/>
          de CS de Hiram Damin
        </h2>
        <div className="quem-confia-wrapper">
          <div className="red-box">
            <img src={Ok} alt="vetor like"/>
            <p className="autor">
              EDUARDO PIMENTEL
              <br/>
              Gerente de Customer Success - Agoge
            </p>
            <p className="autor-about">
              "O Manual do Customer Success tem me ajuda muito a melhorar os 
              processos da minha empresa. O Hiram ao longo do curso traz muitas 
              dicas que tornam os processos muito mais leve na aplicação do 
              Sucesso do Cliente dentro da empresa. O  feedback eu vejo com os 
              clientes e também com os funcionários que acham muito melhor 
              trabalhar em uma empresa que tem processo, ferramentas e metas 
              estabelecidas."
            </p>
          </div>
          <div className="youtube-wrapper">
            <iframe 
              title="youtube"
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/ePlpcjzbZl4" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
        <img 
          className="blue-line display-none-700" 
          src={BlueLine} 
          alt="linha azul"
        />
      </div>
    </section>
  );
}

export default QuemConfia;