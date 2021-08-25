import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from './store'

function App () {
    return (
      <Provider store={store}>
        <div className="app-wrapper">
          <Posts />
        </div>
      </Provider>
    );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

