import { Component } from "react";
import "./App.css";
import BurgerStore from "./components/BurgerStore";
class App extends Component {
  render() {
    return (
      <div className="app">
        <BurgerStore/>
      </div>
    )
   
  }
}

export default App;
