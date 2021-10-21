import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`

export const NavLogo = styled(Link)`
  color: darkcyan;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem ;
  height: 100%;
  cursor: pointer;

  &:focus {
    border-bottom: 3px solid darkcyan;
  }
  
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

`

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: darkcyan;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
`
