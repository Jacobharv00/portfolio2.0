import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../videos/video.mp4'
import Waves from '../../images/waves.jpg'


const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={ Video } type='video/mp4' poster={ Waves } />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome To My Portfolio</HeroH1>
        <HeroP>Full Stack Software Engineer</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection



