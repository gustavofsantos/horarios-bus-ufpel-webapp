import React from 'react';
import Header from '../header/Header';
import ListaHorarios from '../lista-horarios/ListaHorarios';
import getHorarios from '../../lib/getHorarios';

export default class Main extends React.Component {

  state = {
    linha: 'anglo-ru',
    horarios: []
  }

  async onLinhaChange(linha) {
    try {
      const res = await getHorarios();
      const horarios = res[linha];

      this.setState({
        linha,
        horarios
      });
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    await this.onLinhaChange(this.state.linha);
  }

  render() {
    return (
      <div>
        <Header linha={this.state.linha} onLinhaChange={this.onLinhaChange} />
        <ListaHorarios horarios={this.state.horarios} />
      </div>
    );
  }
}