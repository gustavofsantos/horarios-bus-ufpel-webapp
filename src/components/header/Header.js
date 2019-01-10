import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      linha: props.linha
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="header">
        <span className="header__title">
          { this.state.linha }
        </span>
      </div>
    );
  }
}
