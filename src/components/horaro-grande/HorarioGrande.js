import React from 'react';
import './HorarioGrande.css';

export default function HorarioGrande(props) {

  function matchBackground(linha) {
    switch(linha) {
      case 'anglo-ru':
        return 'background-anglo-ru';
      case 'anglo-med':
        return 'background-anglo-med';
      case 'anglo-esef':
        return 'background-anglo-esef';
      case 'anglo-capao':
        return 'background-anglo-capao';
      case 'capao-anglo':
        return 'background-capao-anglo';
      default:
        return 'background-white';
    }
  }

  return (
    <div className={`horario-grande ${matchBackground(props.linha)}`}>
      <div className="horario-grande__header">
        <span className="horario-grande__header--linha">
          {props.linha}
        </span>
        <span className="horario-grande__header--observacao">
          {props.observacao}
        </span>
      </div>

      <div className="horario-grande__horario-container">
        <span className="horario-grande__horario-container--horario">
          {props.horario}
        </span>
      </div>
    </div>
  );
}