import React from 'react';
import './Horarios.css';

export default props => (
  <div className="horario-card">
    <h1>
      {props.horario}
    </h1>
    <span>
      {props.observacao}
    </span>
  </div>
);