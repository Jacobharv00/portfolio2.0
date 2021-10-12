import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'



const Navbar = ( { toggle } ) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Jacob Harvey</NavLogo>
          <MobileIcon onClick={ toggle }>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='skills'>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/email'>Email</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

