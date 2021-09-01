import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "/Users/jasonfrimpong/Documents/ZeroToMastery/React2021/monsters-rolodex/src/search-box/search-box.component.jsx";
import { Cardlist } from "./componentsFolder/card-list/card-list";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cardlist monsters={filterMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
