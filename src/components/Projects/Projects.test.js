import React from 'react'
import ReactDOM from 'react-dom'
import { Projects } from './Projects'

const props = {
  handleProjectsMount: jest.fn(),
  hasMountedProjects: false
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Projects {...props} />, div)
})
