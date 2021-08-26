import React, { Component } from "react";
import "./App.css";

import { Cardlist } from "./componentsFolder/card-list/card-list";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        <Cardlist name="Yihua">
          {this.state.monsters.map((monsters) => (
            <h1 key={monsters.id}> {monsters.name}</h1>
          ))}
        </Cardlist>
      </div>
    );
  }
}

export default App;
