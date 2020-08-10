import React from 'react';
import './QuemConfia.css';
import Ok from '../assets/vetores/ok.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function QuemConfia() {
  return (
    <section className="QuemConfia">
      <h2 className="container">
        Veja quem confia
        <br/>
        na gente :)
      </h2>
      <div className="container">
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
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              <br/>
              sed diam nonummy nibh euismod tincidunt ut laoreet 
              <br/>
              dolore magna aliquam erat volutpat. Ut wisi enim ad 
              <br/>
              minim veniam, quis nostrud exerci tation 
            </span>
          </div>
          <iframe 
            title="youtube"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/7qUM3340slk?controls=0" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullscreen
          >
          </iframe>
        </div>
        <img className="blue-line" src={BlueLine} alt=""/>
      </div>
    </section>
  );
}

export default QuemConfia;