import React from 'react';
import Buscador from "./Buscador.js"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ensayaderos: []
    };
  }

  componentDidMount() {

    fetch("/data")
    .then(res => res.json())
    .then(ensayaderos => 
      this.setState({
        ensayaderos : ensayaderos
      }));
    
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
