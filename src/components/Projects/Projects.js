import React from 'react'
import projects from './projectsSettings'
import './Projects.css'

import { map, reduce, filter, flow, identity } from 'lodash/fp'
const nfpMap = map.convert({ cap: false })

const ProjectLink = ({ url, children }) => (
  <a href={url} target='_blank' rel='noopener noreferrer' className='link'>
    {children}
  </a>
)

export class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'all',
      touchedCard: { index: null, value: null }
    }
  }

  componentDidMount() {
    const { handleProjectsMount, hasMountedProjects } = this.props
    handleProjectsMount(true)
    if (!hasMountedProjects) {
      this.timeout = setTimeout(this.handleTouchStart(0), 500)
      this.timeout = setTimeout(this.handleTouchStart(0), 1500)
    }
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
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
    const { touchedCard } = this.state
    const isTouched = (index === touchedCard.index) && touchedCard.value
    return (
      <div key={`project${index}`} style={{ margin: '20px' }}>
        <ProjectLink url={itemURL}>
          <h6>{itemTitle}</h6>
        </ProjectLink>
        <div className={isTouched ? 'card-container touched' : 'card-container'}
          onTouchStart={this.handleTouchStart(index)}
        >
          <div className='card'>
            <div className='front' >
              <img src={imgLink} alt='presentation' className='projectImage' />
            </div>
            <div className='back'>
              <div className='project-description'>
                <p>{description}</p>
                {<ProjectLink url={itemURL}><i className="fa fa-external-link" aria-hidden="true" /></ProjectLink>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleTouchStart = (index) => (e) => {
    const { touchedCard } = this.state
    this.setState({
      touchedCard: touchedCard.index === index ? { index, value: !touchedCard.value } : { index, value: true }
    })
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
      <div className='Projects'>
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
