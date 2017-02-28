import React from 'react';
import { Grid, Row, Column } from 'react-cellblock';

export const About = () => {
  return (
    <div className="App-about">
      <h2>About</h2>
      <p>Hi! My name is Sam. I develop things.</p>
      <div className="lists">
        <Grid>
          <Row>
            <Column width="1/2">
              <p>Skills:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </Column>
            <Column width="1/2">
              <p>Interests:</p>
              <ul>
                <li>React</li>
                <li>Node.js/Express</li>
                <li>D3</li>
                <li>Elixir</li>
              </ul>
            </Column>
          </Row>
        </Grid>
      </div>
    </div>
  )
}
