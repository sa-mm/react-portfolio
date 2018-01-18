import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasMountedProjects: false
    }
  }

  handleProjectsMount = (hasMountedProjects) => {
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
      <div className='App'>
        <Router>
          <div>
            <Header />
            <div className='contain-width'>
              <Route exact path="/" component={About} />
              <Route path="/projects" render={RoutedProjects} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
