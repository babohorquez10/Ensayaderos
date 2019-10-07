import React from 'react';
import "./Filtros.css";

class Filtros extends React.Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFilterCheckBox = this.handleFilterCheckBox.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleTextChange (e) {
    this.props.onTextChange(e.target.value);
  }

  handleFilterCheckBox (e) {
    this.props.onFilterCheckBox(e.target.checked);
  }

  handleSliderChange(e) {
    this.props.onSliderChange(e.target.value);
  }

  render() {
    return (
      <form>
        <div className="row">
          <input className="col-12" type="text" placeholder="Nombre..." 
          value={this.props.buscado} onChange={this.handleTextChange} />
        </div>
        <div className="row">
          Filtrar
          <input className="filtro" type="checkbox" checked={this.props.filtrarPrecio} 
          onChange={this.handleFilterCheckBox} />

          <input className="slider" type="range" min="5000" max="50000" step="1000" value={this.props.precioMaximo}
          onChange={this.handleSliderChange} />
          <span>${this.props.precioMaximo}</span>
        </div>
      </form>
    );
  }
}

export default Filtros;

