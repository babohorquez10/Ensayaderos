import React from 'react';
import mapboxgl from 'mapbox-gl';
import Marker from "./Marker.js";

class Mapa extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      map: {}
    };
  }

  render () {

    const markers = [];

    this.props.ensayaderos.forEach(ensayadero => {

      // const buscado = this.props.buscado;
      // const precioMaximo = this.props.precioMaximo;
      // const filtrarPrecio = this.props.filtrarPrecio;

      markers.push(<Marker key={ensayadero._id} ensayadero={ensayadero} map={this.state.map} />);

    });

    return <div id="map">{markers}</div>;
  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFib2hvcnF1ZXoxMCIsImEiOiJjazFoMjVpdGEwMnk2M25wazNndW13b3gxIn0.gi33kXTcJorLu8CNyhHoIQ';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-74.061483, 4.653139],
      zoom: 12
    });

    this.setState({
      map: map
    });

  }
}

export default Mapa;
