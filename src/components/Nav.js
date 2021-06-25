import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
//Link 를 임폴트하고 to="/" 를적어준다.
function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">CLinkpture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  
  justify-content: space-between;
  align-items:center;
  padding:1rem 10rem;
  background:#282828;
  a{
      color:#fff;
      text-decoration:none;
  }
  ul{
      display:flex;
      list-style: none;
  }
  #logo{
      font-size:1.8rem;
      font-family:"Lobster", cursive;
  }
  li{
      padding-left:5rem;
      position:relative;

  }
`;
export default Nav;
