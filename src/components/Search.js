import { useEffect, useState } from "react"; 
import styled from "styled-components";
import RepositoryBox from "./RepositoryBox";
import { useRecoilState } from "recoil";
import { likedRepoState } from "../recoil/atoms";

//CSS : Start
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 151px);
  background: #eee;
  padding: 5vw;
  margin-top: 4px;
  box-sizing: border-box;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  width: calc(100% - 70px);
  height: 100%;
  margin-right: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  ::placeholder {
    color: #aaa;
    font: bold 14px/1 "inherit";
  }
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 100%;
  font: bold 14px/1 "inherit";
  border: 0px;
  background-color: #457CC7;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
`;
//CSS : End


// 검색창, 검색 버튼 컴포넌트
const SearchBox = ({ setData }) => {
  //text input 상태값
  const [ input, setInput ] = useState("");

  //검색시 데이터 호출
  const callData = () => {
    const url = `https://api.github.com/search/repositories?q=${input}`;
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data.items);
      //테스트: 검색한 Repo 보기
      //console.log(data.items);
    });
  };

  //검색시 데이터 찾기
  const searchData = () => {
    //빈값 입력시 경고창
    if(input==="") {
      alert("Repository 제목을 입력해주세요.");
      return;
    }
    callData();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <SearchBar>
      <SearchInput 
          type="text" 
          placeholder="Repository 제목을 검색하세요."
          onChange={handleChange}
          onKeyPress={(e)=> (e.key==="Enter") && searchData() }
          value={input}
        />
      <SearchBtn 
          onClick={searchData}
      >검색</SearchBtn>
    </SearchBar>
  );
}


//Search 전체 컴포넌트
const Search = () => {
  //검색한 Repository 상태값
  const [ searchData, setSearchData ] = useState([]);
  //저장한 Repository 상태값
  const [ likedData, setLikedData ] = useRecoilState(likedRepoState);

  //Repository 저장하기
  const likeRepo = (repo)=> {
    setLikedData([repo, ...likedData]);
  }

  //테스트: 저장한 repo 보기
  // useEffect(()=> {
  //   console.log(likedData);
  // }, [likedData]);

  return (
      <Container>
        <SearchBox setData={setSearchData} />
        {
          (searchData && searchData.length!==0) &&          
          searchData.map((item, index)=> {
            //if(index<5) { //목록 5개 제한
              return(
                <RepositoryBox
                  key={index}
                  width={100}
                  title={item.name}
                  description={item.description}
                  avatar={item.owner.avatar_url}
                  updated={item.updated_at}
                  onClick={()=> likeRepo({
                    name: item.name,
                    login: item.owner.login
                  })}
                />
              )
            //}
          })
        }
      </Container>
  );

};





export default Search;
