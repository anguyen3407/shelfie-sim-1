import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import router from '../router'
// import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;
