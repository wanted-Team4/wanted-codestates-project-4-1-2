import React, { useEffect, useState } from "react";

import RepositoryBox from "./RepositoryBox";
import { likedRepoState } from "../recoil/atoms";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Store = () => {
  const [likedData, setLikedData] = useRecoilState(likedRepoState);

  const StoreMap = likedData.map((item, index) => {
    return (
      <RepositoryBox
        button="삭제"
        key={index}
        width={`${365}px`}
        title={item.name}
        description={item.description}
        avatar={item.avatar}
        updated={item.updated}
      />
    );
  });

  const remove = (e) => {
    console.log(
      e.target.parentNode.previousSibling.previousSibling.firstElementChild.src
    );
    let targets =
      e.target.parentNode.previousSibling.previousSibling.firstElementChild.src;

    setLikedData(likedData.filter((item) => item.avatar !== targets));
  };

  return (
    <>
      <StoreContainer>
        <StoreTitleBox>Public Repositoy</StoreTitleBox>
        <StoreRepositoy onClick={remove}>{StoreMap}</StoreRepositoy>
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
