import React from 'react'

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
              { skills.map((skill) => <li>{skill}</li>) }
            </ul>
          </div>
          <div>
            <p>Interests:</p>
            <ul>
              { interests.map((interest) => <li>{interest}</li>) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
