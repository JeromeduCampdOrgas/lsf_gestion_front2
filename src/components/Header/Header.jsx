import logo from "../../assets/logo/logoheader.webp";
import styled from "styled-components";
import Navbar from "../Nav/Navbar";

const HeaderStyle = styled.header`
  width: 100%;
  text-align: center;
  margin: auto;
  padding: 5px;
  & img {
    height: 100px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt="" />
      <h1 id="asso-name">Lévriers sans Frontières</h1>
      <h5 id="asso-qualification">
        Association de défense et de sauvetage des lévriers Galgos d'Espagne
      </h5>
      <Navbar />
    </HeaderStyle>
  );
};
export default Header;
