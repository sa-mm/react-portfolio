import React from 'react'
import projects from './projectsSettings'
import './Projects.css'

import { filter } from 'lodash'

export class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'all'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    })
  }
  render() {
    const renderProjects = (projects, predicate = (e) => e) => {
      return filter(projects, predicate).map(({ itemTitle, itemURL, imgLink, description }, i) => {
        return (
          <div key={`project${i}`} className='project' >
            <h6>{itemTitle}</h6>
            <div>
              <a href={itemURL} target='_blank' rel='noopener noreferrer'>
                <img src={imgLink} alt='presentation' className='projectImage' />
              </a>
            </div>
            <p className='projectDescription'>{description}</p>
          </div>
        )
      })
    }

    const { selectedOption } = this.state
    const options = projects.map(e => e.category).reduce((acc, e) => {
      if (acc.includes(e)) {
        return acc
      } else {
        return [...acc, e]
      }
    }, [])
    const showSelect = false
    return (
      <div className='Portfolio'>
        <h2 className='heading'>Projects</h2>
        {showSelect && (
          <select name='project_categories' onChange={this.handleChange} value={selectedOption}>
              {['all', ...options].map((cat, idx) => {
                return <option key={`project_option${idx}`} value={cat}>{cat}</option>
              })}
          </select>
        )}
        <div className='projectsContainer'>
          {renderProjects(projects, selectedOption === 'all' ? e => e : e => e.category === selectedOption)}
        </div>
      </div>
    )
  }
}
