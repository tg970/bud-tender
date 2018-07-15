import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: null };
  }

  componentDidMount() {
    fetch("/api/hello")
      .then(res => res.json())
      .then((data) => {
        this.setState({ greeting: data.message });
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        {this.state.greeting ? (
          <h1>
            {this.state.greeting}
          </h1>
        ) : (
          <h1>
            Loading... please wait!
          </h1>
        )}
        <img className="logo" src={ReactImage} alt="react" />
      </div>
    );
  }
}
