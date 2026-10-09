import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {TbBrandLinkedin} from 'react-icons/tb'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='' target='blank'><FaFacebookSquare/></a>
        <a href='' target='blank'><FaInstagramSquare/></a>
        <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=bf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdebashis-sarkar-1a7048194' target='blank'><TbBrandLinkedin/></a>
    </div>
  )
}

export default HeaderSocials