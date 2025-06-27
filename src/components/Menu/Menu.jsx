import Logo from "../../assets/logo_brunodev.svg";
import styled from "styled-components";

const MenuContainer = styled.nav`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 999px;
  border: 1px solid var(--white);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    color: var(--white);
    text-decoration: none;
    font-weight: 400;

    &:hover {
      color: var(--accent-color);
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

export default Menu; // <- ESSA LINHA É ESSENCIAL
