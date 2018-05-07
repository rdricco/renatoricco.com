import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import convivaLogo from "../../assets/images/projects/conviva.png";
import littleNomadLogo from "../../assets/images/projects/gatsby.svg";
import walkthroughViewGif from "../../assets/images/projects/Flyjack_Logo-Orange.png";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Recent Projects">
        <div className="row">
          <ExperienceUnit
            logo={littleNomadLogo}
            colour="#FFFFFF"
            title="Iandi Gatsby Starter"
            link="https://iandi-gatsby-starter.renatoricco.com/"
            timeperiod="2018"
            subtitle="A starter kit for gatsbyjs - a static site generator using react."
          />
          <ExperienceUnit
            logo={convivaLogo}
            colour="#ffffff"
            title="conviva.vc"
            link="https://conviva.vc/"
            timeperiod="2018"
            subtitle="Front end development & responsive design."
          />
          <ExperienceUnit
            logo={walkthroughViewGif}
            colour="#ffffff"
            title="Flyjack - New Day"
            link="https://flyjackmusic.com/music"
            timeperiod="2017"
            subtitle="Art Direction & Package Design."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
