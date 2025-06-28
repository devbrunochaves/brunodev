import Logo from "../../assets/logo_brunodev.svg";
import styled from "styled-components";

const MenuContainer = styled.nav`
  max-width: 80%;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 999px;
  border: 1px solid var(--white);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: var(--font-poppins);
  font-size: 18px;
  font-weight: 100;
`;

const MenuItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
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


const Menu = () => {
  return (
    <MenuContainer>
      <a href="/#">
        <img src={Logo} alt="Bruno Chaves Dev" />
      </a>

        <MenuItems>
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