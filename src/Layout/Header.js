import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <NavLink to='/'>Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to='/favorite'>Favoris</NavLink>
        </NavLi>
      </NavUl>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: #729ea1;
  padding: 10px 0;
`

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`

const NavLi = styled.li`
  width: 50%;
  text-align: center;
`
const NavLink = styled(Link)`
  text-decoration: none;
  margin: auto;
  color: #39393a;
`

export default Header
