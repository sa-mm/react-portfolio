import React from 'react';

export const About = () => {
  return (
    <div className="App-about">
      <h2>About</h2>
      <p>I'm Sam. I develop things.</p>
      <div className="lists">
        <div style={{ width: "20%", float: "left" }}>
          <p>Skills:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div style={{ width: "45%", float: "right" }}>
          <p>Interests:</p>
          <ul>
            <li>React</li>
            <li>ExpressJS</li>
            <li>D3</li>
            <li>Elixir</li>
            <li>Ruby</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
