import { useEffect, useState } from "react";

import RepositoryBox from "./RepositoryBox";
import SearchBox from "./SearchBox";
import { likedRepoState } from "../recoil/atoms";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 151px);
  background: #eee;
  padding: 5vw;
  margin-top: 4px;
  box-sizing: border-box;
`;

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [likedData, setLikedData] = useRecoilState(likedRepoState);

  useEffect(() => {
    localStorage.setItem("likedData", JSON.stringify(likedData));
  }, [likedData]);

  const likeRepo = async (repo) => {
    const storageData = await JSON.parse(localStorage.getItem("likedData"));

    if (storageData.length === 4) {
      alert("Repository는 최대 4개까지 등록할 수 있습니다.");
    } else {
      const exist = storageData.find((repoName) => repoName.name === repo.name);
      if (exist) {
        alert("이미 등록한 Repository입니다.");
      } else {
        setLikedData([...likedData, repo]);
      }
    }
  };

  return (
    <Container>
      <SearchBox setData={setSearchData} />
      {searchData &&
        searchData.length !== 0 &&
        searchData.map((item, index) => {
          return (
            <RepositoryBox
              url={item.html_url}
              key={index}
              width={100}
              title={item.name}
              description={item.description}
              avatar={item.owner.avatar_url}
              updated={item.updated_at}
              button="등록"
              onClick={() =>
                likeRepo({
                  name: item.name,
                  login: item.owner.login,
                  description: item.description,
                  updated: item.updated_at,
                  avatar: item.owner.avatar_url,
                })
              }
            />
          );
        })}
    </Container>
  );
};

export default Search;
