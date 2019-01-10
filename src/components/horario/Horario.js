import React from 'react';
import './Horario.css';

export default props => (
  <div className="horario-card" id={props.horario}>
    <h1>
      {props.horario}
    </h1>
    <span>
      {props.observacao}
    </span>
  </div>
);