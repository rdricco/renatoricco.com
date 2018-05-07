import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return <div className="about">
        <div className="image" />
        <div className="bio">
          I'm a technology enthusiast, amateur astronomer, cyclist and a casual gamer. At moment I'm learning to play guitar as a new hobby.
          <div className="emoji">⌨️ 🔭🚲🕹️🎸</div>
        </div>
      </div>;
  }
}

export default About