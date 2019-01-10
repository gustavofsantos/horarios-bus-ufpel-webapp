import React from 'react';
import './Horario.css';

export default props => (
  <div className="horario-card" id={props.horario}>
    <span className="horario-card__horario">
      {props.horario}
    </span>
    <span className="horario-card__obs">
      {props.observacao}
    </span>
  </div>
);