import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Renato Ricco</span>
      </h5>

      <h3 className="bold">
        My work ranges from graphic-design to front-end development. I was born
        in São Paulo, where I currently live. If you would like to collaborate,
        feel free to contact me.
      </h3>

      <ExperienceSection />
      <ProjectsSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </div>
);

export default IndexPage
