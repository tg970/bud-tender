import React, { Component } from "react";
import "./app.css";
import Button from '@material-ui/core/Button';
import ReactImage from "./react.png";
import List from "./components/List";
import Form from "./components/Form";
import MenuAppBar from  "./components/AppBar";
import Footer from "./components/Footer/Footer";

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
        <MenuAppBar />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
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
        <div>
          <h2>
            Users
          </h2>
          <List />
        </div>
        <div>
          <h2>
            Add a new user
          </h2>
          <Form />
        </div>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <Footer />
      </div>
    );
  }
}

// const App = () => (
//   <div>
//     <div>
//       <h2>
//         Users
//       </h2>
//       <List />
//     </div>
//     <div>
//       <h2>
//         Add a new user
//       </h2>
//       <Form />
//     </div>
//   </div>
// );
//
// export default App;
