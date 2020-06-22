import React from "react";
import { Link } from "react-router-dom";
import { NavTag, Logo } from "./Nav.styles";

function Nav() {
  return (
    <NavTag>
      <Logo to="/portfolio2020" aria-label="home">
        Sarah <span>Hick</span>
      </Logo>
      <Link to="/portfolio2020/about">About</Link>
    </NavTag>
  );
}

export default Nav;
