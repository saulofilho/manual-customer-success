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
              <strong>Marcela</strong>
              <br/>
              Assistente de Marketing
            </p>
            <p className="autor-subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing 
              <br/>
              elit, sed diam nonummy nibh euismod tincidunt ut
            </p>
            <p className="autor-about">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              <br/>
              sed diam nonummy nibh euismod tincidunt ut laoreet 
              <br/>
              dolore magna aliquam erat volutpat. Ut wisi enim ad 
              <br/>
              minim veniam, quis nostrud exerci tation 
            </p>
          </div>
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