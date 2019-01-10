import React from 'react';

import './Carregando.css';

export default (props) => (
  <div className="carregando">
    <span className="carregando__texto">
      {props.mensagem ? props.mensagem : 'Carregando...'}
    </span>
  </div>
);