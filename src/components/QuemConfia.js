import React from 'react';
import './QuemConfia.css';
import Ok from '../assets/vetores/ok.png';
import BlueLine from '../assets/vetores/linha-blue.png';
import HorizontalLine from '../assets/vetores/line-horizontal.png';

function QuemConfia() {
  return (
    <section className="QuemConfia">
      <div className="container">
        <h2>
          Veja quem confia
          <br/>
          na gente :)
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
          <img className="linha-red-box" src={HorizontalLine} alt="linha horizontal"/>
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
        <img 
          className="blue-line display-none-700" 
          src={BlueLine} 
          alt=""
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </section>
  );
}

export default QuemConfia;