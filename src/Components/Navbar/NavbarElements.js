import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: ${( { scrollNav } ) => ( scrollNav ? '#277F91' : 'transparent' )};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display:flex;
  justify-content:space-between;
  height:80px;
  z-index:1;
  width:100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled( LinkR )`
  color: #F7E3A1;
  justify-self: flex-start;
  cursor:pointer;
  font-size: 2.5rem;
  display:flex;
  align-items:center;
  margin-top: 10px;
  margin-left: 25px;
  font-weight: 900;
  text-decoration:none;

    &:hover{
    color: #C2D4D6;
    transition: all 0.2s ease-in-out;
  }
`

export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color:#F7E3A1;
  }
`

export const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;


  @media screen and (max-width: 768px) {
    display:none;
  }
`

export const NavItem = styled.li`
  height:80px;
`

export const NavLinks = styled( LinkScroll )`
  color: #F7E3A1;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding:0 1rem;
  height: 100%;
  cursor:pointer;
  font-weight:900;
  font-size: 1.2rem;
  margin-top: 10px;

  &.active {
    border-bottom: 3px solid #383F42;
  }

  &:hover{
    color: #C2D4D6;
    transition: all 0.2s ease-in-out;
  }

`

export const NavBtn = styled.nav`
  display:flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    display:none
  }
`

export const NavBtnLink = styled( LinkR )`
  border-radius: 50px;
  background:transparent;
  white-space: space nowrap;
  padding: 10px 22px;
  color: #F7E3A1;
  font-size:18px;
  outline:none;
  border:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none;
  font-weight: 500;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background:#F7E3A1;
    color:#383F42;
    font-weight: 700;
  }
`

