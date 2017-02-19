import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
