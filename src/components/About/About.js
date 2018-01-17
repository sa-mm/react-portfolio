import React from 'react'
import './About.css'

const color = {
  color: 'grey'
}
export const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js/Express']
  const interests = ['Bootstrap', 'D3', 'Elixir']
  return (
    <div>
      <div className='About'>
        <h2 className='heading'>About</h2>
        <p>Hi! My name is Sam. I develop things.</p>
        <div className='lists'>
          <div>
            <p>Skills:</p>
            <ul>
              {skills.map((skill, id) => <li key={`skill${id}`}>{skill}</li>) }
            </ul>
          </div>
          <div>
            <p>Interests:</p>
            <ul>
              {interests.map((interest, id) => <li key={`interest${id}`}>{interest}</li>) }
            </ul>
          </div>
        </div>
      </div>
      <div className='About-contact'>
        <h2 className='heading'>Contact</h2>
        <p>I'm <em>sa-mm</em> on <a href='https://github.com/sa-mm' target='_blank' rel='noopener noreferrer' style={color}>GitHub</a> <i className='fa fa-github' />. You can contact me <a href='https://twitter.com/s_pugly' target='_blank' rel='noopener noreferrer' style={color}>@s_pugly</a> <i className='fa fa-twitter' /> on Twitter or get in touch via <a href='https://www.linkedin.com/in/sam-mcmyler/' target='_blank' rel='noopener noreferrer' style={color}>LinkedIn</a> <i className="fa fa-linkedin-square" aria-hidden="true" />.</p>
      </div>
    </div>
  )
}
