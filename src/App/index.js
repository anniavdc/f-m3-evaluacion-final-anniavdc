import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import HomePage from "../components/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: ""
    };
    this.handleInputChange=this.handleInputChange.bind(this)
  }
  componentDidMount(){
    this.getCharacters();
  }

  getCharacters() {
    const ENDPOINT = "http://hp-api.herokuapp.com/api/characters";

    fetch(ENDPOINT)
    .then(response => response.json()
    .then(data => {
      this.setState({
        characters: data,
      })
    }));
  }
  handleInputChange(){
    console.log('hola');
    
  }
  render() {
    console.log(this.state.inputValue);
    const { characters, inputValue } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routerProps=>(<HomePage match={routerProps.match} characters={characters} value={inputValue}
          handleInputChange={this.handleInputChange}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
