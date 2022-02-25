import { useEffect, useState } from "react";

import Loader from "./Loader";
import RepositoryBox from "./RepositoryBox";
import SearchBox from "./SearchBox";
import { likedRepoState } from "../recoil/atoms";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import Pagination from "./Pagination";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 134px);
  background: #eee;
  padding: 5vw;
  margin-top: 4px;
  box-sizing: border-box;
`;

const Search = () => {
  const storageData = JSON.parse(localStorage.getItem("likedData"));
  const [searchData, setSearchData] = useState([]);
  const [likedData, setLikedData] = useState(storageData ? storageData : []);
  const [isLoaded, setIsLoaded] = useState(null);

  // 페이지별 담는 글 갯수
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  // 총 몇개의 페이지가 필요한지 계산
  const offset = (page - 1) * limit;

  useEffect(() => {
    localStorage.setItem("likedData", JSON.stringify(likedData));
  }, [likedData]);

  const likeRepo = async (repo) => {
    const storageData = await JSON.parse(localStorage.getItem("likedData"));

    if (storageData.length === 4) {
      alert("Repository는 최대 4개까지 등록할 수 있습니다.");
    } else {
      const exist = storageData.find(
        (repoName) =>
          repoName.name === repo.name && repoName.login === repo.login
      );
      if (exist) {
        alert("이미 등록한 Repository입니다.");
      } else {
        setLikedData([...likedData, repo]);
      }
    }
  };

  return (
    <Container>
      <SearchBox setData={setSearchData} setIsLoaded={setIsLoaded} />
      {isLoaded !== null &&
        (isLoaded ? (
          <>
            {searchData.slice(offset, offset + limit).map((item, index) => 
                <RepositoryBox
                  url={item.html_url}
                  key={index}
                  width={`auto`}
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
            )}
            <Pagination
              total={searchData.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </>
        ) : (
          <Loader />
        ))}


    </Container>
  );
};

export default Search;
