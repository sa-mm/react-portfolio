import React from 'react'
import './Tab.css'

const indexFromValue = (value, arr) => {
  return arr.findIndex((item) => item.value === value)
}

class TabContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: props.tabs[0].value,
      tabWithHover: indexFromValue(props.tabs[0].value, props.tabs)
    }
    this.tabs = this.props.tabs
    this.selectTab = this.selectTab.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.renderChildren = this.renderChildren.bind(this)
  }

  selectTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  handleClick (val) {
    return function TODO (e) {
      this.setState({
        selectedTab: val
      })
    }.bind(this)
  }

  handleMouseEnter (index) {
    return function TODO () {
      this.setState({
        tabWithHover: index
      })
    }.bind(this)
  }

  handleMouseLeave () {
    const { selectedTab } = this.state
    const { tabs } = this.props
    this.setState({
      tabWithHover: indexFromValue(selectedTab, tabs)
    })
  }

  renderChildren (children) {
    const { selectedTab } = this.state
    const { tabs } = this.props
    const index = indexFromValue(selectedTab, tabs)
    const selectedChild = children[index]

    return selectedChild
  }

  render () {
    const { tabs, children } = this.props
    const { tabWithHover } = this.state
    return (
      <div>
        <div className='navbar'>
          {tabs.map((tab, idx) => {
            const isHovered = tabWithHover === idx
            return (
              <div
                key={`navbar${idx}`}
                value={tab.value}
                id={tab.value}
                className={isHovered ? 'tabWithHover' : 'tab'}
                onClick={this.handleClick(tab.value)}
                onMouseEnter={this.handleMouseEnter(idx)}
                onMouseLeave={this.handleMouseLeave}
              >
                {tab.name}
              </div>
            )
          })}
        </div>
        <div>
          {this.renderChildren(children)}
        </div>
      </div>
    )
  }
}

export default TabContainer
