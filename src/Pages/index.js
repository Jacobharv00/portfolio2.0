import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjBio } from '../Components/InfoSection/Data'
import useMeasure from 'react-use-measure'
import { useTrail, animated } from '@react-spring/web'
import styles from './styles.module.css'


const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = ( x, y ) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const Home = () => {
  const [ isOpen, setIsOpen ] = useState( false )

  const [ trail, api ] = useTrail( 3, i => ( {
    xy: [ 0, 0 ],
    config: i === 0 ? fast : slow,
  } ) )
  const [ ref, { left, top } ] = useMeasure()

  const handleMouseMove = e => {
    api.start( { xy: [ e.clientX - left, e.clientY - top ] } )
  }

  const toggle = () => {
    setIsOpen( !isOpen )
  }

  return (
    <>
      <Sidebar isOpen={ isOpen } toggle={ toggle } />
      <Navbar toggle={ toggle } />
      <HeroSection />
      <InfoSection { ...homeObjBio } />
      <InfoSection { ...homeObjOne } />
      <InfoSection { ...homeObjTwo } />
      <InfoSection { ...homeObjThree } />
      <div className={ styles.container }>
        <h1 className={ styles.blob }>BLOB FUN!</h1>
        <svg style={ { position: 'absolute', width: 0, height: 0 } }>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div ref={ ref } className={ styles.hooksMain } onMouseMove={ handleMouseMove }>
          { trail.map( ( props, index ) => (
            <animated.div key={ index } style={ { transform: props.xy.to( trans ) } } />
          ) ) }
        </div>
      </div>
    </>
  )
}

export default Home
