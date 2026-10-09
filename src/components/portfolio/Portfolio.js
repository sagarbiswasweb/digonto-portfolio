import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.jpg'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
import IMG7 from '../../assets/7.jpg'
import IMG8 from '../../assets/8.jpg'
import IMG9 from '../../assets/9.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION


// ARRY OF EACH PROJECTS IMAGE AND GITHUB LINKS TO DYNAMICALLY SHOW IT ON WEBSITE
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fully Responsive Portfolio App With React Js',
    github: 'https://github.com',
    demo: 'https://saggarr.com'
  },

  

  // {
  //   id : 3,
  //   image: IMG3,
  //   title: 'Simple job record app which can track your applied jobs. made with PHP Laravel, bootstrap, jQuery & mySql',
  //   github: 'https://github.com/saggarr-work/job-record-app'
  // },

  {
    id : 4,
    image: IMG4,
    title: 'Single vendor E-commerce site made with PHP Laravel, bootstrap, jQuery & mySql',
    github: 'https://github.com/saggarr-work/e-trade'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Fully Functional online store with admin panel using raw PHP. Go to /admin and put "admin" as username and password',
    github: 'https://github.com/saggarr-work/HandCraft',
    demo: 'http://beta.saggarr.com/'
  },

  

  

  {
    id: 7,
    image: IMG7,
    title: 'Admin Dashboard & Financial Visualization',
    github: 'https://github.com/saggarr-work/admin_dashboard',
    demo: 'https://saggarr-work.github.io/admin_dashboard/'
  },

  {
    id: 8,
    image: IMG8,
    title: 'Simple Online Note app / CRUD operqtions using PHP',
    github: 'https://github.com/saggarr-work/CRUD',
    demo: 'http://test.saggarr.com/'
  },

  {
    id : 2,
    image: IMG2,
    title: 'Hostel management system with Laravel, mySql',
    github: 'https://github.com/saggarr-work/HMS'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Fully Functional Text Utility App With Javascript',
    github: 'https://github.com/saggarr-work/text-utility-toast',
    demo: 'https://saggarr-work.github.io/text-utility-toast/'
  },

]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                {/* <h3>{title}</h3> */}
                {/* <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div> */}
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio