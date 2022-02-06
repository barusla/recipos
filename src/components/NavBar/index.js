import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, 
  NavLink, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>J&B</NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLink to='/recipes'>Recipes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='dailyRecipe'>Daily Recipe</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='signUp'>Sign up</NavLink>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="signIn">Sign in</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
    )
}

export default Navbar