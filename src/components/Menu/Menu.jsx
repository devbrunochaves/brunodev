import { useState } from "react";
import styled from "styled-components";
import HamburgerIcon from "../../assets/hamburguer.svg";
import Logo from "../../assets/logo_brunodev.svg";

const MenuContainer = styled.nav`
  max-width: 80%;
  margin: 0 auto;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 999px;
  border: 1px solid var(--white);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-poppins);
  font-size: 18px;
  font-weight: 100;
  position: relative;

  @media (max-width: 769px) {
    border-radius: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoImg = styled.img`
  height: 30px;

  @media (max-width: 426px) {
    height: 24px;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    animation: ${({ isOpen }) => (isOpen ? "fadeIn 0.3s ease-in-out" : "fadeOut 0.3s ease-in-out")};
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to   { opacity: 0; transform: translateY(-10px); }
  }
`;


const MenuItem = styled.li`
  a {
    position: relative;
    color: var(--white);
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 0;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 6px;
      width: 100%;
      height: 3px;
      background-color: var(--secondary-color);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 769px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
  }
`;


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContainer>
      <a href="/#">
        <LogoImg src={Logo} alt="Bruno Chaves Dev" />
      </a>

      <ToggleButton onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
        <img src={HamburgerIcon} alt="Menu" style={{ height: "24px", width: "24px" }} />
      </ToggleButton>

      <MenuItems isOpen={isOpen}>
        <MenuItem><a href="#inicio">Início</a></MenuItem>
        <MenuItem><a href="#sobre">Sobre</a></MenuItem>
        <MenuItem><a href="#skills">Skills</a></MenuItem>
        <MenuItem><a href="#projetos">Projetos</a></MenuItem>
        <MenuItem><a href="#setup">Setup</a></MenuItem>
        <MenuItem><a href="#contato">Contato</a></MenuItem>
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
