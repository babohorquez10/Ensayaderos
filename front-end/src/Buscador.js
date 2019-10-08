import React from 'react';
import Filtros from "./Filtros.js";
import ListaEnsayaderos from "./ListaEnsayaderos.js";

class Buscador extends React.Component {

  render() {

    return (
      <div className="buscador col-12">
        <Filtros buscado={this.props.buscado} 
        filtrarPrecio={this.props.filtrarPrecio}
        precioMaximo={this.props.precioMaximo}
        onTextChange={this.props.onTextChange}
        onFilterCheckBox={this.props.onFilterCheckBox}
        onSliderChange={this.props.onSliderChange} 
        />

        <ListaEnsayaderos ensayaderos={this.props.ensayaderos} 
        buscado={this.props.buscado} 
        filtrarPrecio={this.props.filtrarPrecio} 
        precioMaximo={this.props.precioMaximo}
        />
      </div>
    );
  }
}

export default Buscador;

