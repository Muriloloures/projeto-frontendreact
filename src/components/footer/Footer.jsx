import React from 'react'
import { FooterContainer } from './FooterStyle'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
  return (
    <FooterContainer>
      <div className='reserved'>
        <a href="https://shop.spacex.com/pages/faqs">FAQs</a>
        <a href="/">Search</a>
        <a href="https://shop.spacex.com/policies/privacy-policy">Privacy Policy</a>
        <a href="https://shop.spacex.com/policies/terms-of-service">Terms & Conditions</a>
      </div>
      <div className='createBy'>
        <span>Feito por Murilo Loures</span><a className='gitAndLink' href='https://github.com/Muriloloures' target='_blank'><BsGithub /></a><a className='gitAndLink' href='https://www.linkedin.com/in/murilo-loures/' target='_blank'><BsLinkedin /></a>
      </div>
      <div className='spaceStore'>
        <a href="/">© SPACEX STORE</a>
      </div>
    </FooterContainer>
  )
}
