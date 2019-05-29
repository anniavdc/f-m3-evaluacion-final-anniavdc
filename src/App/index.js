import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import DetailsPage from "../components/DetailsPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: "",
      loading: true,
      inputNumber: null,
      inputStatus:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputNumber = this.handleInputNumber.bind(this);
    this.handleInputSelect = this.handleInputSelect.bind(this)
  }
  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    const ENDPOINT = "https://hp-api.herokuapp.com/api/characters";

    fetch(ENDPOINT).then(response =>
      response.json().then(data => {
        this.setState({
          loading: false,
          characters: data.map((person, index) => {
            return { ...person, id: index + 1 };
          })
        });
      })
    );
  }
  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({
      inputValue: inputValue
    });
  }
  handleInputNumber(event){
    const inputValue = event.target.value;
    this.setState({
      inputNumber: inputValue
    })
  }
  handleInputSelect(event){
    const inputValue = event.target.value;
    this.setState({
      inputStatus: inputValue
    })
  }
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    const { characters, inputValue, loading, inputNumber, inputStatus } = this.state;
    return (
      <div className="App__container">
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <HomePage
                match={routerProps.match}
                characters={characters}
                value={inputValue}
                handleInputChange={this.handleInputChange}
                handleInputNumber={this.handleInputNumber}
                inputNumber={inputNumber}
                handleInputSelect={this.handleInputSelect}
                inputStatus={inputStatus}
              />
            )}
          />
          <Route
            path="/character/:id"
            render={routerProps => (
              <DetailsPage
                match={routerProps.match}
                characters={characters}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
