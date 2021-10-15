import { FaJsSquare, FaReact, FaLinkedin, FaGithubAlt, FaMedium, FaEnvelope, FaUserNinja } from "react-icons/fa"
import { DiRubyRough, DiRor, DiHeroku, DiPostgresql, DiSqllite, DiGithubBadge, DiCss3, DiVisualstudio } from 'react-icons/di'
import { SiNetlify, SiStyledcomponents, SiMaterialui } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

export const homeObjBio = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Bio',
  headline: 'Hello! My name is Jacob Harvey and I am Full Stack Software Engineer with a passion for creating captivating web applications.',
  // description: 'I enjoy reading, surfing, traveling, and learning new things everyday.',
  // remove button
  // buttonLabel: 'Demo',
  imgStart: true,
  //fix image
  img: require( '../../images/Me.jpg' ).default,
  alt: 'me',
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
  headline: 'All of my projects are hosted live. Please feel free to go to the live site and play around!',
  description: 'PROJECT CARDS',
  // buttonLabel: 'Demo',
  imgStart: false,
  img: require( '../../images/projects.svg' ).default,
  alt: 'project',
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
  headline: 'JavaScript, React, Ruby, Rails, Heroku, Netlify, GitHub, SQLite3, PostgresQL, Styled Components, Material UI, CSS, HTML, Visual Studio',
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
  // CHANGE IMG TO SKILLS RELATED IMG
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
  // headline: 'With Me!',
  description: <>
    <a href="https://www.linkedin.com/in/jacobharvey19" target="_blank" rel='noreferrer'><FaLinkedin style={ { color: '#75A1BD' } } /></a>
    <a href="https://www.github.com/Jacobharv00" target="_blank" rel='noreferrer'><FaGithubAlt style={ { color: '#75A1BD' } } /></a>
    <a href="https://jacobharv00.medium.com" target="_blank" rel='noreferrer'><FaMedium style={ { color: '#75A1BD' } } /></a>
    <a href="mailto:https://jacobharv00@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope style={ { color: '#75A1BD' } } /></a>
    {/* Change path for resume to load my pdf of resume */ }
    <a href="/" target="_blank" rel="noreferrer"><FaUserNinja style={ { color: '#75A1BD' } } /></a>
  </>,
  // buttonLabel: 'Thanks!',
  imgStart: false,
  img: require( '../../images/connect.svg' ).default,
  alt: 'icons',
  dark: false,
  primary: true,
  darkText: false
}


