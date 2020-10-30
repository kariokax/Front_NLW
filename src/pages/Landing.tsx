import React from 'react';
import{FiArrowRight} from 'react-icons/fi';
import{Link} from 'react-router-dom' //fazer transição de uma tela pra outra sem recarregar pag totalmente, reapoveita os componentes 

import'../styles/pages/landing.css';

import logoImg from '../images/logo.svg';
function Landing(){
  return(
    <div id="page-landing">
     <div className="content-wrapper"> 
          <img src={logoImg} alt="Happysr"/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>

          <div className="location">
            <strong>Goiânia</strong>
            <span>Goiás</span>
          </div>

          <Link to="/app" className="enter-app">
           <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
     </div>
    </div>
  );
  }

export default Landing;