import React from 'react';
import mapboxgl from 'mapbox-gl';

class Marker extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (<div ref={this.myRef} className="marker"></div>);
  }

  componentDidMount() {
    
    new mapboxgl.Marker(this.myRef.current)
      .setLngLat(this.props.ensayadero.coordenadas)
      .addTo(this.props.map);
  }
}

export default Marker;
