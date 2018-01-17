import React from 'react'
import './App.css'
import { About } from './components/About'
import { Projects } from './components/Projects'
import TabContainer from './components/Tab/TabContainer'

class App extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      hasMountedProjects: false
    }

    this.tabs = [
      {
        name: 'About',
        value: 'about'
      },
      {
        name: 'Projects',
        value: 'projects'
      }
    ]
  }

  handleProjectsMount = (hasMountedProjects) => {
    this.setState({
      hasMountedProjects
    })
  }
  render () {

    const { hasMountedProjects } = this.state
    return (
      <div className='App'>
        <TabContainer tabs={this.tabs}>
          <About />
          <Projects
            handleProjectsMount={this.handleProjectsMount}
            hasMountedProjects={hasMountedProjects}
          />
        </TabContainer>
      </div>
    )
  }
}

export default App
