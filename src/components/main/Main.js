import React from 'react';
import Header from '../header/Header';

export default class Main extends React.Component {

  state = {
    linha: 'anglo-centro'
  }

  onLinhaChange() {
    
  }

  render() {
    return (
      <div>
        <Header linha={this.state.linha} />
      </div>
    );
  }
}