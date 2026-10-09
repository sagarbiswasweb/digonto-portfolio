import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    // name: 'Tina Snow',
    review: 'The seller was very professional. He listened to what I wanted and made sure that the work was completed correctly. His work is wonderful and on time. I look forward to working with him again very soon on other podcasts.'
  },

  {
    avatar: AVTR2,
    // name: 'Shatta Wale',
    review: 'This is a great seller and I highly recommend them. I would use them again all over and they are great'
  },

  {
    avatar: AVTR4,
    // name: 'Tithi shukla',
    review: 'The seller was incredibly professional and attentive to my needs. He took the time to understand my goals for boosting my Spotify presence and executed the strategy flawlessly. The results were outstanding, with improved rankings and increased streams. Everything was delivered on time, and I couldnt be happier with the service. Im excited to collaborate again on future projects to continue growing my Spotify presence!'
  }
]


function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=''></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials