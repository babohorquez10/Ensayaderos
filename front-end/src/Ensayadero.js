import React from 'react';
import "./Ensayadero.css";

class Ensayadero extends React.Component {

  render() {
    return (
      <div className="ensayadero card border-dark">
        <div className="card-header">
          <strong>{this.props.ensayadero.nombre}</strong>
        </div>
        <div className="card-body">
          <div>Precio: ${this.props.ensayadero.precio}</div>
          <div>Dirección: {this.props.ensayadero.direccion}</div>
        </div>

      </div>
    );
  }
}

export default Ensayadero;

