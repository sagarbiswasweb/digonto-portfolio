import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About_Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>100+ Completed Projects</small>
            </article>
          </div>

          <p>I’m a results-driven <strong>digital marketer</strong> with a passion for helping businesses grow online. With expertise in <strong>SEO, PPC, social media marketing, content strategy, and analytics,</strong> I create data-driven campaigns that boost brand visibility and drive conversions.</p>
          <p>My approach is centered on understanding audience behavior, optimizing digital touchpoints, and leveraging the latest marketing trends to deliver measurable success. Whether it’s crafting compelling ad campaigns, optimizing websites for search engines, or engaging audiences on social platforms, I focus on strategies that maximize ROI.</p>
          <p>Let’s connect and take your digital presence to the next level!</p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about