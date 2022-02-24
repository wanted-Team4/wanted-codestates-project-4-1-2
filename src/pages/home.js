import Repository from "../components/Repository";
import Store from "../components/Store";
import styled from "styled-components";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Repository />
      <Store />
    </Container>
  );
};
export default Home;
