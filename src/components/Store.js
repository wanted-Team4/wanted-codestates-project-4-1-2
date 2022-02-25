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
        width={`auto`}
        title={item.name}
        description={item.description}
        avatar={item.avatar}
        updated={item.updated}
        onClick={()=> remove(item.name, item.login)}
      />
    );
  });

  const remove = (name, login) => {
    const storageData = JSON.parse(localStorage.getItem("likedData"));

    const deletedArr = storageData.filter((item)=> item.name !== name || item.login !== login);

    setLikedData(deletedArr);

  };

  useEffect(()=> {
    localStorage.setItem('likedData', JSON.stringify(likedData));
  }, [likedData]);

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
