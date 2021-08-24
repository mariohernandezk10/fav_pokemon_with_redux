import './App.css';
import React, {Component} from 'react';
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;