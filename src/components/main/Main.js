import React from 'react';
import Header from '../header/Header';
import ListaHorarios from '../lista-horarios/ListaHorarios';
import Section from '../section/Section';
import ProximosHorarios from '../proximos-horarios/ProximosHorarios';
import getHorarios from '../../lib/getHorarios';

import './Main.css';

export default class Main extends React.Component {

  state = {
    linha: 'anglo-ru',
    horarios: [],
    proximosHorarios: []
  }

  linhas = [
    'anglo-ru',
    'anglo-med',
    'anglo-esef',
    'anglo-capao',
    'capao-anglo'
  ];

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

  proximoBus() {
    const dataAgora = new Date();
    const horaAgora = dataAgora.getHours();
    const minAgora = dataAgora.getMinutes();
  }

  computProximosHorarios() {
    const horarios = [
      {
        linha: 'anglo-ru',
        proximoHorario: '10:40',
        observacao: 'CEU'
      },
      {
        linha: 'anglo-med',
        proximoHorario: '11:20',
        observacao: ''
      },
      {
        linha: 'anglo-esef',
        proximoHorario: '10:55',
        observacao: ''
      },
      {
        linha: 'anglo-capao',
        proximoHorario: '11:00',
        observacao: 'CEU'
      },
      {
        linha: 'capao-anglo',
        proximoHorario: '12:00',
        observacao: 'CEU'
      },
    ];

    this.setState({
      proximosHorarios: horarios
    });
  }

  async componentDidMount() {
    await this.onLinhaChange(this.state.linha);
    this.computProximosHorarios();
  }

  render() {
    return (
      <div>
        <div>
          <Header
            linha={this.state.linha}
            linhas={this.linhas}
            onLinhaChange={this.onLinhaChange}
          />
        </div>
        <div style={{
          marginTop: '52px'
        }}>
          <Section>
            Próximos horários
          </Section>

          <ProximosHorarios
            horarios={this.state.proximosHorarios}
          />

          <Section>
            Próximos horários
          </Section>

          <ListaHorarios horarios={this.state.horarios} />
        </div>
      </div>
    );
  }
}