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
        <h3>I'm Sam.</h3>
        <p className='About-text'>Hi! I'm happy in my current position, but would love to talk about what you're up to.</p>
        <p>I implement features, balancing code quality with business needs.</p>

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
