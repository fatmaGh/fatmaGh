import React from 'react'
import './Resume.css'
import res_logo from '../../images/logo.png'
import git from '../../images/github3.png'
import linked from '../../images/linked3.png'
import website from '../../images/link.png'
import phone from '../../images/phone3.png'

const Resume = () => {
  return (
    <section className='resume'>
      <div className='res-header'>
          <img className='res-logo' src={res_logo} height='200px' width='200px'/>
          <div className='res-title'>
            <h4 className='res-sub-title'>Fatma Gharsallah</h4>
            <p className='res-subtitle'>Full Stack Web Developer<br/>
            Web Designer</p>
          </div>
          <div className='res-coord'>
            <div className='coord-links'>
              <img src={git}/>
              <a href='https://github.com/fatmaGh' className='coord-title'>fatma Gh</a>
            </div>
            <div className='coord-links'>
              <img src={linked}/>
              <a href='https://www.linkedin.com/in/fatma-gharsallah-0535131a1/' className='coord-title'>Fatma Gharsallah</a>

            </div>
            <div className='coord-links'>
              <img src={website}/>
              <h6 className='coord-title'>Web Site</h6>
            </div>
            <div className='coord-links'>
              <img src={phone}/>
              <h6 className='coord-title'>+216 95 98 66 35</h6>
            </div>
          </div>
      </div>
      <div className='res-container'></div>
      <div className='res-footer'></div>
    </section>
  )
}
export default Resume