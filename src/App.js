import React from 'react'
import './App.css'
import { About } from './About'
import { Projects } from './Projects'
import TabContainer from './components/TabContainer'

class App extends React.Component {
  constructor (props) {
    super(props)
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
  render () {
    return (
      <div className='App'>
        <TabContainer tabs={this.tabs}>
          <About />
          <Projects />
        </TabContainer>
      </div>
    )
  }
}

export default App
