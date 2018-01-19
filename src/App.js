import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Post from './components/Post'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasMountedProjects: false
    }
  }

  handleProjectsMount = hasMountedProjects => {
    this.setState({
      hasMountedProjects
    })
  }

  render() {
    const RoutedProjects = () => (
      <Projects
        handleProjectsMount={this.handleProjectsMount}
        hasMountedProjects={hasMountedProjects}
      />
    )

    const { hasMountedProjects } = this.state
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="contain-width">
              <Route exact path="/" component={Home} />
              <Route path="/post/:slug" component={Post} />
              <Route exact path="/about" component={About} />
              <Route path="/projects" render={RoutedProjects} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
