import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mapboxgl from 'mapbox-gl';

ReactDOM.render(<App />, document.getElementById('root'));

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFib2hvcnF1ZXoxMCIsImEiOiJjazFoMjVpdGEwMnk2M25wazNndW13b3gxIn0.gi33kXTcJorLu8CNyhHoIQ';

new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-74.06816275282222, 4.66383995809629],
  zoom: 11
});


