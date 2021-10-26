import { FaJsSquare, FaReact, FaLinkedin, FaGithubAlt, FaMedium, FaEnvelope, FaUserNinja, FaUserAstronaut } from "react-icons/fa"
import { DiRubyRough, DiRor, DiHeroku, DiPostgresql, DiSqllite, DiGithubBadge, DiCss3, DiVisualstudio } from 'react-icons/di'
import { SiNetlify, SiStyledcomponents, SiMaterialui } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { GiDinosaurRex, GiFilmProjector, GiWalk } from 'react-icons/gi'


export const homeObjBio = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'bio',
  headline: 'Hello! My name is Jacob Harvey, I am Full Stack Software Engineer with enthusiasm for creating captivating web applications. When I am not having a blast programming I love to surf, snowboard, read, travel, and spend time with my family.',
  //description: '',
  // buttonLabel: 'Demo',
  imgStart: true,
  img: require( '../../images/Me.jpg' ).default,
  alt: 'Jacob Harvey',
  dark: true,
  primary: false,
  darkText: false
}

export const homeObjOne = {
  id: 'projects',
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Projects',
  headline: 'LOUNGEZILLA, Movie-Lounge, Future, Hangman. Click any icon below to visit the live sites and play around!',
  description: <>
    <a className='nav-link' href="https://loungezilla.herokuapp.com" target="_blank" rel="noreferrer">
      <GiDinosaurRex className='icon' />
      <span className='nav-text'>LOUNGEZILLA</span>
    </a>
    <a className='nav-link' href="https://movie-lounge.netlify.app" target="_blank" rel='noreferrer'>
      <GiFilmProjector className='icon' />
      <span className='nav-text'>Movie Lounge</span>
    </a>
    <a className='nav-link' href="https://jacobharv-future.netlify.app" target="_blank" rel='noreferrer'>
      <FaUserAstronaut className='icon' />
      <span className='nav-text'>Future</span>
    </a>
    <a className='nav-link' href="https://harvey-hangman.netlify.app" target="_blank" rel="noreferrer">
      <GiWalk className='icon' />
      <span className='nav-text'>Hangman</span>
    </a>
  </>,
  // buttonLabel: 'Demo',
  imgStart: false,
  img: require( '../../images/loungezilla.png' ).default,
  alt: 'loungezilla',
  dark: false,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'skills',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Skills',
  headline: 'JavaScript | React | Ruby | Rails | Heroku | Netlify | GitHub | SQLite3 | PostgresQL | Styled Components | Material UI | CSS | HTML | Visual Studio',
  description: <>
    <FaJsSquare />
    <FaReact />
    <DiRubyRough />
    <DiRor />
    <DiHeroku />
    <SiNetlify />
    <DiGithubBadge />
    <DiSqllite />
    <DiPostgresql />
    <SiStyledcomponents />
    <SiMaterialui />
    <DiCss3 />
    <AiFillHtml5 />
    <DiVisualstudio />
  </>,
  // buttonLabel: 'Skills',
  imgStart: true,
  img: require( '../../images/skills.svg' ).default,
  alt: 'skills',
  dark: true,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'contact',
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Connect',
  // headline: '',
  description: <>
    <a href="https://www.linkedin.com/in/jacobharvey19" target="_blank" rel='noreferrer'><FaLinkedin className='icon' /></a>
    <a href="https://www.github.com/Jacobharv00" target="_blank" rel='noreferrer'><FaGithubAlt className='icon' /></a>
    <a href="https://jacobharv00.medium.com" target="_blank" rel='noreferrer'><FaMedium className='icon' /></a>
    <a href="mailto:https://jacobharv00@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className='icon' /></a>
    <a href={ require( '../../images/resume.png' ).default } target="_blank" rel="noreferrer"><FaUserNinja className='icon' /></a>
  </>,
  // buttonLabel: '',
  imgStart: false,
  img: require( '../../images/connect.svg' ).default,
  alt: 'connect',
  dark: false,
  primary: true,
  darkText: false
}


