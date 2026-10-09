import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h3>Podcast Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Rank:</b> I provide website design services that prioritize user experience and create a visually appealing interface that captures the brand's essence. I strive to create designs that align with your brand's values and mission.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Download:</b> I utilize HTML, CSS, and JavaScript to create high-quality front-end user interfaces that work well on any device. I pay attention to details, such as responsive design, typography, and accessibility, to ensure that the user interface is user-friendly, and easy to use.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Listener:</b> I utilize popular frontend frameworks and libraries such as React, Vue.js, and Angular to create responsive and dynamic user interfaces that are robust, performant, and scalable. This also enables me to streamline the development process and deliver high-quality solutions in a timely manner.</p>
            </li>

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Cross-Browser Compatibility:</b> I ensure that websites and web applications I develop are compatible with all major browsers and devices, ensuring a seamless user experience for all visitors. This helps improve your website's search engine ranking and increases your website's overall reach.</p>
            </li> */}

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Performance Optimization:</b> I focus on creating websites and web applications that are optimized for fast load times, and low page size. I make use of best practices such as code minification, image optimization, and caching to improve the website's overall performance.</p>
            </li> */}

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Accessibility:</b> I create accessible user interfaces that cater to users with disabilities. This includes the use of semantic HTML, ARIA tags, and ensuring compliance with the Web Content Accessibility Guidelines (WCAG).</p>
            </li> */}
          </ul>
        </article>
        {/* END OF WEB DEV */}

        <article className='service'>
          <div className='service__head'>
            <h3>Spotify Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Rank:</b> I implement SEO optimization, keyword strategies, and audience engagement techniques to boost your podcast’s ranking on major directories like Apple Podcasts, Spotify, and Google Podcasts.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Downloads & Streams:</b> I execute targeted marketing campaigns to increase episode downloads and total streams, ensuring a steady growth of your audience.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Listener Growth:</b> I develop strategies to attract new listeners and retain existing ones through engaging content, social media marketing, and audience interaction.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Podcast SEO:</b> I optimize your podcast title, description, and episode metadata to improve discoverability on search engines and podcast directories.</p>
            </li>

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Social Media Promotion:</b> I create and schedule engaging social media content to promote episodes and increase engagement on platforms like Twitter, Instagram, LinkedIn, and Facebook.</p>
            </li> */}

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Paid Advertising:</b> I run targeted ad campaigns on platforms like Facebook, Instagram, and YouTube to drive more listeners to your podcast.</p>
            </li> */}

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Guest & Influencer Outreach:</b> I connect with influencers, industry leaders, and potential guests to expand your reach and attract a broader audience.</p>
            </li> */}

            {/* <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Email Marketing:</b> I create email campaigns and newsletters to keep your audience engaged and informed about new episodes.</p>
            </li> */}
{/* 
            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Press & Blog Features:</b> I pitch your podcast to blogs, news sites, and media platforms to gain more exposure and credibility.</p>
            </li> */}
{/* 
            <li>
              <BsCheckLg className='service__list-icon' />
              <p><b>Analytics & Performance Tracking:</b> I track key metrics like listener demographics, engagement, and episode performance to continuously improve marketing strategies.</p>
            </li> */}

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services