import React, { useEffect, useState } from "react";

import RepositoryBox from "./RepositoryBox";
import { likedRepoState } from "../recoil/atoms";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Store = () => {
  const [repositoyBox, setRepositoyBox] = useState([
    likedRepoState.length <= 1 ? likedRepoState : null,
  ]);
  const [likedData, setLikedData] = useRecoilState(likedRepoState);

  useEffect(() => {
    setRepositoyBox([likedRepoState.length <= 1 ? likedRepoState : null]);
  }, [likedRepoState]);

  let repositoyNum = null;
  // console.log(likedData);

  const StoreMap = likedData.map((item, index) => {
    repositoyNum = index;
    return (
      <RepositoryBox
        button="삭제"
        key={index}
        width={100}
        title={item.name}
        description={item.description}
        avatar={item.avatar_url}
        updated={item.updated_at}
      />
    );
  });
  // console.log(repositoyNum);
  // alert 창
  if (repositoyNum >= 4) {
    alert("4개 이상 즐겨찾기 안됩니다 ");
  }
  return (
    <>
      <StoreContainer>
        <StoreTitleBox>Public Repository</StoreTitleBox>
        <StoreRepositoy>{StoreMap}</StoreRepositoy>
      </StoreContainer>
    </>
  );
};
const StoreContainer = styled.div`
  // 스토어 틀
  width: 30%;
`;
const StoreTitleBox = styled.div`
  // Public Repositoy 이름 구간
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin: 37px 0px 15px 0px;
`;
const StoreRepositoy = styled.div`
  // Repositoy 박스 담아주는 틀
  border-top: 5px solid #cbc3c3;
  padding: 30px 3vw;
  box-sizing: border-box;
`;

export default Store;
