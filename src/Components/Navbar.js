import { NavLink } from "react-router-dom"
import { StyledNavbar } from '../StyledComponents/StyledNavbar'
import styled from 'styled-components'



const StyledNavLink = styled( NavLink )`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`

function Navbar () {
  return (
    <StyledNavbar>
      <StyledNavLink to="/">HOME</StyledNavLink>
      <StyledNavLink to="/AboutPage">ABOUT ME</StyledNavLink>
    </StyledNavbar>
  )
}

export default Navbar

