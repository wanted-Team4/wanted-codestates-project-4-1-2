import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-left: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const Navigation = () => {
  return (
    <>
      <Nav>PayHere</Nav>
    </>
  );
};

export default Navigation;
