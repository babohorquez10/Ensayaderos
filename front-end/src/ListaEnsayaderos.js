import React from 'react';
import Ensayadero from "./Ensayadero.js"

class ListaEnsayaderos extends React.Component {

  render() {
    const ensayaderos = [];
    const buscado = this.props.buscado;
    const precioMaximo = this.props.precioMaximo;
    const filtrarPrecio = this.props.filtrarPrecio;

    this.props.ensayaderos.forEach(ensayadero => {

      if(ensayadero.nombre.toUpperCase().indexOf(buscado.toUpperCase()) === -1) return;
      if(filtrarPrecio && ensayadero.precio > precioMaximo) return;

      ensayaderos.push(<Ensayadero key={ensayadero.id} ensayadero={ensayadero} />);

    });

    return (
      <div className="listaEnsayaderos">
        {ensayaderos}
      </div>
    );
  }
}

export default ListaEnsayaderos;

