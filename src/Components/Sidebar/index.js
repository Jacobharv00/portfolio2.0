import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ( { isOpen, toggle } ) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
      <Icon onClick={ toggle }>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={ toggle }>
            Bio
          </SidebarLink>
          <SidebarLink to='projects' onClick={ toggle }>
            Projects
          </SidebarLink>
          <SidebarLink to='skills' onClick={ toggle }>
            Skills
          </SidebarLink>
          <SidebarLink to='contact' onClick={ toggle }>
            Connect
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/emailpage'>Email Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
