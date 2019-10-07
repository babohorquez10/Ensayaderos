import React from 'react';
import Buscador from "./Buscador.js"

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
      <div>
      <h1>Buscar</h1>
      <Buscador ensayaderos={this.state.ensayaderos}/>
      </div>
      );
  }
}

export default App;
