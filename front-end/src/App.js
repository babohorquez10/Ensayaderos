import React from 'react';
import Buscador from "./Buscador.js";
import Mapa from "./Mapa.js";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ensayaderos: []
    };
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
          <Mapa />
        </div>
        <div className="col-4">
          <h1>Buscar</h1>
          <Buscador ensayaderos={this.state.ensayaderos}/>
        </div>
      </div>
    );
  }
}

export default App;
