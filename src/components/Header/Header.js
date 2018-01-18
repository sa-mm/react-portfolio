import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export class Header extends React.Component {
  state = {
    hasUnderline: window.location.pathname,
  }

  links = [
    { name: 'About', route: '/' },
    { name: 'Projects', route: '/projects' }
  ]

  handleMouseEvent = (route) => () => {
    this.setState({
      hasUnderline: route
    })
  }

  handleMouseLeave = (route) => () => {
    this.setState({
      hasUnderline: route
    })
  }

  render() {
    const { hasUnderline } = this.state
    const { pathname } = window.location

    return (
      <div className='navbar-container'>
        <div className='contain-width'>
          <div className='navbar'>
            {this.links.map(({name, route}, idx) => {
              return (
                <Link
                  to={route}
                  key={`headerLink${idx}`}
                  className={hasUnderline === route ? 'underline' : ''}
                  onMouseEnter={this.handleMouseEvent(route)}
                  onMouseLeave={this.handleMouseEvent(pathname)}>
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}