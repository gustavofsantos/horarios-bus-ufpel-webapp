import React from 'react';
import HorarioGrande from '../horaro-grande/HorarioGrande';

import './ProximosHorarios.css';

export default function ProximosHorarios(props) {

  return (
    <div className="proximos-horarios">
      {
        props.horarios.map((horario, index) =>
          <HorarioGrande
            key={index}
            linha={horario.linha}
            observacao={horario.observacao}
            horario={horario.proximoHorario}
          />
        )
      }
    </div>
  )
}