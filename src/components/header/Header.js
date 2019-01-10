import React, { useState } from 'react';

const Header = props => {
  const [ state, setState ] = useState({ linha: props.linha || 'anglo-centro' });

  return (
    <div>
      { state.linha }
    </div>
  );
}

export default Header;