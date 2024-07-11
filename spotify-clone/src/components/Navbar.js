import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.dark};
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 18px;
  margin: 0 10px; /* Add some space between items */
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
        <NavItem><StyledLink to="/top-artists">Top Artists</StyledLink></NavItem>
        <NavItem><StyledLink to="/albums">Top Albums</StyledLink></NavItem>
        <NavItem><StyledLink to="/songs">Songs</StyledLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
