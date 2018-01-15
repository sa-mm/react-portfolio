import React from 'react'
const color = {
  color: 'grey'
}
export const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js/Express']
  const interests = ['Bootstrap', 'D3', 'Elixir']
  return (
    <div className='App-about-container'>
      <div className='App-about center'>
        <h2>About</h2>
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
      <div className='App-contact center'>
        <h2>Contact</h2>
        <p>I'm <em>sa-mm</em> on <a href='https://github.com/sa-mm' target='_blank' rel='noopener noreferrer' style={color}>GitHub <i className='fa fa-github' /></a>. You can also contact me <a href='https://twitter.com/s_pugly' target='_blank' rel='noopener noreferrer' style={color}>@s_pugly <i className='fa fa-twitter' /></a> on Twitter.</p>
      </div>
    </div>
  )
}
