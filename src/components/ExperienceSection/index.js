import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import emanageLogo from '../../assets/images/experience/emanage-logo.png'
import sercomLogo from "../../assets/images/experience/telecom-logo.svg";
import westwingLogo from "../../assets/images/experience/westwing-logo.png";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Recent Experience">
        <div className="row">
          <ExperienceUnit
            logo={emanageLogo}
            colour='#fff'
            title='eManage Development'
            link='https://emanagedevelopment.com/'
            timeperiod='2017-2018'
            subtitle='Front End developer.'
          />
          <ExperienceUnit
            logo={sercomLogo}
            colour='#3CA9D8'
            title='Sercom / Tel&Com'
            link='https://www.sercom.com.br/'
            timeperiod='2014'
            subtitle='NOC technician.'
          />
          <ExperienceUnit
            logo={westwingLogo}
            colour='#fff'
            title='Westwing'
            link='https://www.westwing.com.br/'
            timeperiod='2012-2014'
            subtitle='Web designer.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
