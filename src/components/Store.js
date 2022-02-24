import styled from "styled-components";
import RepositoryBox from "./RepositoryBox";
import React, { useState } from "react";
const Store = () => {
  const [repositoyBox, setRepositoyBox] = useState([
    <RepositoryBox />,
    <RepositoryBox />,
    <RepositoryBox />,
    <RepositoryBox />,
  ]);

  let repositoyNum = null;

  repositoyBox.map((item, index) => {
    repositoyNum = index;
    return <RepositoryBox key={index} />;
  });
  // alert 창
  if (repositoyNum >= 4) {
    alert("4개 이상 즐겨찾기 안됩니다 ");
  }
  return (
    <>
      <StoreContainer>
        <StoreTitleBox>Public Repositoy</StoreTitleBox>
        <StoreRepositoy>{repositoyBox}</StoreRepositoy>
      </StoreContainer>
    </>
  );
};
const StoreContainer = styled.div`
  // 스토어 틀
  width: 30%;
  height: 100vw;
`;
const StoreTitleBox = styled.div`
  // Public Repositoy 이름 구간
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 29px 0px;
`;
const StoreRepositoy = styled.div`
  // Repositoy 박스 담아주는 틀
  border-top: 5px solid #cbc3c3;
  height: 100vw;
  padding: 40px 0px 0px 50px;
`;

export default Store;
