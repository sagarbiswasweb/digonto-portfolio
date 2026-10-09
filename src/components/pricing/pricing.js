import React from 'react'
import './pricing.css'
import { BsCheckLg } from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>Package & Rates</h5>
      <h2>Pricing</h2>

      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h2>30 Days</h2>
          </div>
          <div className='price'>
            <h2>Basic: 500$</h2>
          </div>
          <ul className='service__list'>
            <li>
              <p><strong>Traffic: </strong>Attracting a minimum of 10K-15K traffic in apple podcast and 5K-10K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Download: </strong>Minimum of 5K-10K download in apple podcast and 2K-8K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Rank: </strong>Rank will be in top 200 in Apple podcast (subcategory) & top 50 in Spotify.</p>
            </li>
            <li>
              <p><strong>Follower: </strong>Follower will increase depends on your show.</p>
            </li>
            <li>
              <p>You can choose country</p>
            </li>
            <a href='#contact' className='btn btn-primary'> Order Now</a>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h2>30 Days</h2>
          </div>
          <div className='price'>
            <h2>Standard: 700$</h2>
          </div>
          <ul className='service__list'>
            <li>
              <p><strong>Traffic: </strong>Attracting a minimum of 14K-21K traffic in apple podcast and 7K-14K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Download: </strong>Minimum of 7K-14K download in apple podcast and 3K-12K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Rank: </strong>Rank will be in top 150 in Apple podcast (subcategory) & top 40 in Spotify.</p>
            </li>
            <li>
              <p><strong>Follower: </strong>Follower will increase depends on your show.</p>
            </li>
            <li>
              <p>You can choose country</p>
            </li>
            <a href='#contact' className='btn btn-primary'> Order Now</a>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h2>30 Days</h2>
          </div>
          <div className='price'>
            <h2>Premium: 1000$</h2>
          </div>
          <ul className='service__list'>
            <li>
              <p><strong>Traffic: </strong>Attracting a minimum of 20K-30K traffic in apple podcast and 10K-20K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Download: </strong>Minimum of 10K-20K download in apple podcast and 5K-17K traffic in spotify.</p>
            </li>
            <li>
              <p><strong>Rank: </strong>Rank will be in top 100 in Apple podcast (subcategory) & top 30 in Spotify.</p>
            </li>
            <li>
              <p><strong>Follower: </strong>Follower will increase depends on your show.</p>
            </li>
            <li>
              <p>You can choose country</p>
            </li>
            <a href='#contact' className='btn btn-primary'> Order Now</a>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h2>30 Days</h2>
          </div>
          <div className='price'>
            <h2>Custom</h2>
          </div>
          <ul className='service__list'>
            <li>
              <p>It will depend on your budget. please contact us for more information.</p>
            </li>
            <a href='#contact' className='btn btn-primary'> Order Now</a>
          </ul>
        </article>
        {/* END OF WEB DEV */}


        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services