import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import HomePage from "../components/HomePage";
import DetailsPage from "../components/DetailsPage"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: "",
      loading: true,
    };
    this.handleInputChange=this.handleInputChange.bind(this)
  }
  componentDidMount(){
    this.getCharacters();
  }

  getCharacters() {
    const ENDPOINT = "https://hp-api.herokuapp.com/api/characters";

    fetch(ENDPOINT)
    .then(response => response.json()
    .then(data => {
      this.setState({
        loading: false,
        characters: data.map((person, index) => {
          return {...person, id: index + 1}
        }),
      })
    }));
  }
  handleInputChange(event){
    const inputValue = event.target.value;
    this.setState({
      inputValue: inputValue
    })
  }
  render() {
    const { characters, inputValue, loading } = this.state;
    return (
      <div className="App__container">
        <Switch>
          <Route exact path="/" render={routerProps=>(<HomePage match={routerProps.match} characters={characters} value={inputValue}
          handleInputChange={this.handleInputChange}/>)} />
          <Route path="/character/:id" render={routerProps=>(
            <DetailsPage match={routerProps.match} characters={characters} loading={loading}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
