import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

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
  background-color: #457cc7;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
`;

const SearchBox = ({ setData, setIsLoaded }) => {
  const [input, setInput] = useState("");

  const callData = async () => {
    setIsLoaded(false);

    const url = `https://api.github.com/search/repositories?q=${input}&per_page=100`;
    await axios.get(url).then((data) => {
      setData(data.data.items);
    });

    setIsLoaded(true);
  };

  //검색시 데이터 찾기
  const searchData = () => {
    //빈값 입력시 경고창
    if (input === "") {
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
        onKeyPress={(e) => e.key === "Enter" && searchData()}
        value={input}
      />
      <SearchBtn onClick={searchData}>검색</SearchBtn>
    </SearchBar>
  );
};

export default SearchBox;
