import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Podcast Marketing</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Rank</h4>
                <small className='text-light'>
                  <ul>
                    <li>All-Category Rank (Top 200)</li>
                    <li>Sub-Category Rank (Top 200)</li>
                  </ul>
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Download</h4>
                <small className='text-light'>
                  <ul>
                    <li>Boost total episode downloads</li>
                    <li>Increase first-week plays</li>
                    <li>Drive organic & paid growth</li>
                  </ul>
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Listener</h4>
                <small className='text-light'>
                  <ul>
                    <li>Grow audience reach</li>
                    <li>Increase listener retention</li>
                    <li>Engage through social & email</li>
                  </ul>
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend'>
          <h3>Spotify Marketing</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Rank</h4>
                <small className='text-light'>
                  <ul>
                    <li>Boost rankings on Spotify charts</li>
                    <li>Optimize for Spotify algorithm</li>
                  </ul>
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Streams</h4>
                <small className='text-light'>
                  <ul>
                    <li>Increase total & first-week streams</li>
                    <li>Drive organic & playlist growth</li>
                  </ul>
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Listeners</h4>
                <small className='text-light'>
                  <ul>
                    <li>Expand audience reach</li>
                    <li>Boost engagement & retention</li>
                  </ul>
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience