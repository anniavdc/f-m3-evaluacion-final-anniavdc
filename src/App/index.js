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
      filters:{
        house:[],
        status:"",
        alive: true,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCheckboxChange=this.handleInputCheckboxChange.bind(this);
    this.handleInputRadioChange=this.handleInputRadioChange.bind(this);
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
      inputValue: inputValue,
    });
  }
  handleInputCheckboxChange(event) {
    const inputValue = event.target.value;
    const inputHouse = event.target.checked;
    this.setState((prevState)=>{
      if(inputHouse){
        return {filters:{
          ...prevState.filters, house: prevState.filters.house.concat(inputValue)
        }}
      }else{
        return {filters:{
          ...prevState.filters, house: prevState.filters.house.filter(item => item !== inputValue)
        }}
      }
    });
  }
  handleInputRadioChange(event){
    const inputValue=event.target.value;
    const inputStatus=event.target.checked;
    this.setState((prevState)=>{
      if(inputStatus){
        return {filters:{
          ...prevState.filters, status: inputValue
        }}
      }
    })
  
  }
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    const { characters, inputValue, loading } = this.state;
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
                valueChekbox={this.state.filters.house}
                handleInputCheckboxChange={this.handleInputCheckboxChange}
                valueRadio={this.state.filters.status}
                handleInputRadioChange={this.handleInputRadioChange}
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
