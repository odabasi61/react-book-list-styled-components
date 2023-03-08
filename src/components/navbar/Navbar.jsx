// navbarı oluşturan herşeyi navbar.styles içinde oluşturup buraya import ettik ve burada birleştirdik.

import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
// menuIcon hamburger menü iconudur. burada data dosyamızdan çekildi. harici kütüphaneden değil.

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };

  // nav içinde justify için space between değeri verdik. flex componentinde default olarak center ayarlıydı. değiştirmek için farklı bir değeri props olarak verdik.
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      {/* menü görünür olamsı için hamburger icona click ile showmenu değiştirme özelliği verdik */}
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/login">Logout</MenuLink> */}

        {/* currentuser true ise menü çubuğunda logout yazısı gösterir ama sayfa login olmuştur. false ise menü çubuğunda register ve login görünür (ayrıca onlaru boş fragment ile sarmalladık) */}
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
