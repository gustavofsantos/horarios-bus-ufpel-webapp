import React from 'react';
import prettyLinha from '../../lib/prettyLinha';

import './Header.css';

export default function Header(props) {
    return (
      <div className="header">
        <select className="header__select" onChange={ev => props.onLinhaChange(ev.target.value)}>
          {
            props.linhas.map((linha, index) =>
              <option 
                className="header__select--option"
                key={index}
                value={linha}>
                {
                  prettyLinha(linha)
                }
              </option>
            )
          }
        </select>
      </div>
    );
}
