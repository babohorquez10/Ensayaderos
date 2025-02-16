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
      <form className="filtros">
        <div className="row">
          <input className="col-12" type="text" placeholder="Nombre..." 
          value={this.props.buscado} onChange={this.handleTextChange} />
        </div>
        <div className="row">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" 
            checked={this.props.filtrarPrecio} onChange={this.handleFilterCheckBox} />
            <label className="custom-control-label" htmlFor="customCheck1">Filtrar</label>
          </div>
        </div>
        <div className="row">
          <label className="slider"> Precio Máximo: ${this.props.precioMaximo / 1000}.000
          <input className="custom-range" type="range" min="5000" max="50000" step="1000" value={this.props.precioMaximo}
          onChange={this.handleSliderChange} disabled={!this.props.filtrarPrecio}/>
          </label>
          
        </div>
        
      </form>
    );
  }
}

export default Filtros;

