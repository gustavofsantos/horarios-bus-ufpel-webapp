import React from 'react';
import Header from '../header/Header';
import ListaHorarios from '../lista-horarios/ListaHorarios';
import Section from '../section/Section';
import ProximosHorarios from '../proximos-horarios/ProximosHorarios';
import getHorarios from '../../lib/getHorarios';

import './Main.css';
import Carregando from '../carregando/Carregando';
import proximoHorario from '../../lib/proximoHorario';

export default class Main extends React.Component {

  state = {
    linha: 'anglo-ru',
    horarios: [],
    proximosHorarios: [],
    todosHorarios: {}
  }

  linhas = [
    'anglo-ru',
    'anglo-med',
    'anglo-esef',
    'anglo-capao',
    'capao-anglo'
  ];

  onLinhaChange = async (linha) => {
    try {
      const res = await getHorarios();
      const horarios = res[linha];

      this.setState({
        linha,
        horarios,
        todosHorarios: res
      });
    } catch (e) {
      console.error(e);
    }
  }

  computProximosHorarios = () => {
    const { todosHorarios } = this.state;
    const linhas = Object.keys(todosHorarios);

    const horarios = linhas.map(linha => {
      const prox = proximoHorario(todosHorarios[linha]);

      if (typeof prox === 'object') {
        return ({
          linha,
          proximoHorario: prox ? prox.horario : '',
          observacao: prox ? prox.ceu ? 'CEU' : '' : ''
        })
      } else {
        return null;
      }
    })
    .filter(horario => horario.proximoHorario ? true : false);

    this.setState({
      proximosHorarios: horarios
    });
  }

  async componentWillMount() {
    await this.onLinhaChange(this.state.linha);
    this.computProximosHorarios();
  }

  render() {
    return (
      <div>
        {
          this.state.horarios.length ?
          <div className="main-container">
            <Header
              linha={this.state.linha}
              linhas={this.linhas}
              onLinhaChange={this.onLinhaChange}
            />

            {
              this.state.proximosHorarios.length > 0 ? 
                <div>
                  <Section>
                    Próximos horários
                  </Section>

                  <ProximosHorarios
                    horarios={this.state.proximosHorarios}
                  />
                </div>
              :
                <div>
                </div>
            }

            <Section>
              Todos horários
            </Section>

            <ListaHorarios horarios={this.state.horarios} />
          </div>
          :
          <Carregando />
        }
      </div>
    );
  }
}