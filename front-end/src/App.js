import React from 'react';
import Mapa from "./Mapa.js";
import Filtros from "./Filtros.js";
import ListaEnsayaderos from "./ListaEnsayaderos.js";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ensayaderos: [],
      buscado: "",
      filtrarPrecio: false,
      precioMaximo: 30000
    };

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

  async componentDidMount() {

    const prom1 = await fetch("/data");
    const prom2 = await prom1.json();

    this.setState({
      ensayaderos : prom2
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-8">
          <h1>Mapa</h1>
          <Mapa 
          ensayaderos={this.state.ensayaderos} 
          buscado={this.state.buscado} 
          filtrarPrecio={this.state.filtrarPrecio}
          precioMaximo={this.state.precioMaximo}
          />
        </div>
        <div className="col-4">
          <h1>Buscar</h1>
          <div className="buscador col-12">
            <Filtros 
            buscado={this.state.buscado} 
            filtrarPrecio={this.state.filtrarPrecio}
            precioMaximo={this.state.precioMaximo}
            onTextChange={this.handleTextChange}
            onFilterCheckBox={this.handleFilterCheckBox}
            onSliderChange={this.handleSliderChange}
            />

            <ListaEnsayaderos 
            ensayaderos={this.state.ensayaderos} 
            buscado={this.state.buscado} 
            filtrarPrecio={this.state.filtrarPrecio} 
            precioMaximo={this.state.precioMaximo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
