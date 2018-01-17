import React from 'react'
import projects from './projectsSettings'
import './Projects.css'

import { map, reduce, filter, flow, identity } from 'lodash/fp'
const nfpMap = map.convert({ cap: false })

export class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'all'
    }
  }

  handleChange = (e) => {
    this.setState({
      selectedOption: e.currentTarget.value
    })
  }

  renderProjects = (projects) => (predicate = identity) => {
    return flow(
      filter(predicate),
      nfpMap(this.mapper)
    )(projects)
  }

  mapper = ({ itemTitle, itemURL, imgLink, description }, index) => {
    return (
      <div key={`project${index}`} className='project' >
        <h6>{itemTitle}</h6>
        <div>
          <a href={itemURL} target='_blank' rel='noopener noreferrer'>
            <img src={imgLink} alt='presentation' className='projectImage' />
          </a>
        </div>
        <p className='projectDescription'>{description}</p>
      </div>
    )
  }

  render() {
    const { selectedOption } = this.state
    const reducer = (categories, e) => categories.includes(e) ? categories : [...categories, e]
    const options = flow(
      map(e => e.category),
      reduce(reducer, [])
    )([{ category: 'all' }, ...projects])
    const showSelect = false
    return (
      <div className='Portfolio'>
        <h2 className='heading'>Projects</h2>
        {showSelect && (
          <select name='project_categories' onChange={this.handleChange} value={selectedOption}>
            {options.map((cat, idx) => {
              return <option key={`project_option${idx}`} value={cat}>{cat}</option>
            })}
          </select>
        )}
        <div className='projectsContainer'>
          {this.renderProjects(projects)(selectedOption === 'all' ? identity : e => e.category === selectedOption)}
        </div>
      </div>
    )
  }
}
