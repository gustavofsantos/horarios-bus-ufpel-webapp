import React from 'react';

import './Section.css';

export default function Section(props) {
  return (
    <div className="section">
      <p className="section__text">
        {props.text || props.children}
      </p>
      <br />
    </div>
  );
}