import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 400;
  color: #725346;
  font-family: "Josefin Sans", sans-serif;
  line-height: 26.4px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px
  font-family: "Josefin Sans", sans-serif;
  line-height: 24px;
  
  cursor: pointer;

  &:hover {
    color: #5A4136;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  position: relative;
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px
  font-family: "Josefin Sans", sans-serif;
  line-height: 24px;
  &:hover {
    color: #5A4136;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  a {
    display: block;
    padding: 0.5rem 0;
    color: black;
    font-weight: 600;
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
    text-decoration: none;
    &:hover {
      color: #5a4136;
    }
  }
`;

const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  padding-top: 2rem;
  z-index: 10;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  a {
    display: block;
    padding: 1rem;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #5a4136;
    }
  }
`;

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>ShadowThorn Studios Games</Logo>

      <Nav>
        <NavLink href="#">ShadowThorn Studios Home</NavLink>
        <NavLink href="#">The Best Games in ChatGPT</NavLink>
        <DropdownContainer>
          <div>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Play a ChatGPT Game
            </DropdownButton>
            <DropdownContent isOpen={isDropdownOpen}>
              <a href="#">Re:Monster Inspired Game</a>
              <a href="#">Sword Art Online RPG Game</a>
              <a href="#">Master Solo Leveling Game</a>
            </DropdownContent>
          </div>
          <div>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Here
            </DropdownButton>
            <DropdownContent isOpen={isDropdownOpen}>
              <a href="#">Re:Monster Inspired Game</a>
              <a href="#">Sword Art Online RPG Game</a>
              <a href="#">Master Solo Leveling Game</a>
            </DropdownContent>
          </div>
        </DropdownContainer>
      </Nav>

      <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        &#9776;
      </HamburgerButton>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
          ShadowThorn Studios Home
        </a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
          The Best Games in ChatGPT
        </a>
        <DropdownContainer>
          <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Play a ChatGPT Game Here
          </DropdownButton>
          <DropdownContent isOpen={isDropdownOpen}>
            <a href="#">Re:Monster Inspired Game</a>
            <a href="#">Sword Art Online RPG Game</a>
            <a href="#">Master Solo Leveling Game</a>
          </DropdownContent>
        </DropdownContainer>
        <a href="#">Project Management Helper</a>
        <a href="#">Best Tools and Resources</a>
        <a href="#">About Us and Some Friends</a>
        <a href="#">The Future of AI Gaming</a>
        <a href="#">Other Games We Recommend</a>
        <a href="#">Animes & Etc We Recommend</a>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header;
