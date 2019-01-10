import React from 'react';
import Horario from '../horario/Horario';
import './ListaHorarios.css';

export default props => (
  <div className="container">
    {
      props.horarios.map((horario, index) => 
        <Horario 
          horario={horario.horario}
          observacao={horario.observacao}
          key={index}
        />
      )
    }
  </div>
);