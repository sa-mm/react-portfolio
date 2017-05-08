import React from 'react'

export const About = () => {
  return (
    <div className="App-about-container">
      <div className="App-about center">
        <h2>About</h2>
        <p>Hi! My name is Sam. I develop things.</p>
        <div className="lists">
          <div>
            <p>Skills:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <p>Interests:</p>
            <ul>
              <li>React</li>
              <li>Node.js/Express</li>
              <li>D3</li>
              <li>Elixir</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
