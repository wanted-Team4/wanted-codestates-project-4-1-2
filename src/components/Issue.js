import RepositoryBox from "./RepositoryBox";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 151px);
  background: #eee;
  margin-top: 4px;
  padding: 5vw;
`;

const Issue = () => {
  return (
    <Container>
      <RepositoryBox width={100} />
    </Container>
  );
};

export default Issue;
