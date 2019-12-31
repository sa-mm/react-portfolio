import React from 'react'
import './About.css'

const color = {
  color: 'grey'
}
export const About = () => {
  const languages = ['Elixir', 'Typescript/Javascript (ES6, React, Redux)', 'HTML', 'CSS', 'SQL']
  const datastores = ['PostgreSQL', 'Mongo']
  const misc = ['AWS', 'GKE', 'CI', 'Kubernetes', 'Docker', 'Bash', 'Dokku']
  return (
    <div className='About'>
      <div className='About-description'>
        <h2 className='heading'>About</h2>
        <p className='About-text'>Hi! My name is Sam. I happy in my current position, but would love to talk about what you're up to.</p>
        <p className='About-text'>As part of a project that involved migrating the datastore from Mongo to Postgres,
        I have refactored large portions of an Elixir codebase and improved the data model without downtime or business diruption. I have
        worked on internal tools for creating customer quotes and internal orders (React, Redux, Typescript, Elixir backend).  I've moved
       various internal reports from Python and Elixir to SQL.</p>
       <p> In general, I implement features for the
        business, balancing code quality with business needs.</p>

        <p className='About-text'>I have solved problems in production with the following tools:</p>
        <div className='lists'>
          <div>
            <p>Languages:</p>
            <ul>
              {languages.map((language, id) => <li key={`languages${id}`}>{language}</li>) }
            </ul>
          </div>
          <div>
            <p>Datastores:</p>
            <ul>
              {datastores.map((datastore, id) => <li key={`datastore${id}`}>{datastore}</li>) }
            </ul>
          </div>
          <div>
            <p>Misc:</p>
            <ul>
              {misc.map((misc, id) => <li key={`misc${id}`}>{misc}</li>) }
            </ul>
          </div>
        </div>
      </div>
      <div className='About-contact'>
        <h2 className='heading'>Contact</h2>
        <p>I'm <em>sa-mm</em> on <a href='https://github.com/sa-mm' target='_blank' rel='noopener noreferrer' style={color}>GitHub</a> <i className='fa fa-github' />.
        You can contact me on <a href='https://keybase.io/sammcmyler' target='_blank' rel='noopener noreferrer' style={color}>Keybase</a> or get in touch via <a href='https://www.linkedin.com/in/sam-mcmyler/' target='_blank' rel='noopener noreferrer' style={color}>LinkedIn</a> <i className="fa fa-linkedin-square" aria-hidden="true" />.</p>
      </div>
    </div>
  )
}
