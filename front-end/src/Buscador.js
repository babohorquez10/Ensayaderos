import React from 'react';
import Filtros from "./Filtros.js";
import ListaEnsayaderos from "./ListaEnsayaderos.js";

class Buscador extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      buscado: "",
      filtrarPrecio: false,
      precioMaximo: 30000
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleFilterCheckBox = this.handleFilterCheckBox.bind(this);
  }

  handleTextChange (buscado) {
    this.setState({
      buscado: buscado
    });
  }

  handleSliderChange (precioMax) {
    this.setState({
      precioMaximo: precioMax
    });
  }

  handleFilterCheckBox (filtrar) {
    this.setState({
      filtrarPrecio: filtrar
    });
  }

  render() {

    return (
      <div className="row">
        <div className="buscador col-4">
          <Filtros buscado={this.state.buscado} 
          filtrarPrecio={this.state.filtrarPrecio}
          precioMaximo={this.state.precioMaximo}
          onTextChange={this.handleTextChange}
          onFilterCheckBox={this.handleFilterCheckBox}
          onSliderChange={this.handleSliderChange} 
          />

          <ListaEnsayaderos ensayaderos={this.props.ensayaderos} 
          buscado={this.state.buscado} 
          filtrarPrecio={this.state.filtrarPrecio} 
          precioMaximo={this.state.precioMaximo}
          />
        </div>
      </div>
    );
  }
}

export default Buscador;

