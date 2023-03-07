// navbarı oluşturan herşeyi navbar.styles içinde oluşturup buraya import ettik ve burada birleştirdik.

import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/login">Logout</MenuLink> */}

        {currentUser ? (
          <MenuLink to="/login" onClick={logout}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
