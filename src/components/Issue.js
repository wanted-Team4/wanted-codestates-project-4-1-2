import { useEffect, useState } from "react";

import RepositoryBox from "./RepositoryBox";
import axios from "axios";
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
  const likedData = JSON.parse(localStorage.getItem("likedData"));
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    likedData.map((value) => searchIssues(value.login, value.name));
  }, []);

  const searchIssues = async (login, name) => {
    const url = `https://api.github.com/repos/${login}/${name}/issues`;
    return axios
      .get(url)
      .then((res) => {
        setIssues((body) => (body ? [...body, ...res.data] : [res.data]));
        // const data = Object.assign({}, issues, likedData);
      })
      .catch((err) => alert(err));
  };

  return (
    <Container>
      {issues.map((value, index) => (
        <RepositoryBox
          url={value.html_url}
          width={100}
          key={index}
          title={value.title}
          updated={value.name}
          avatar={value.user.avatar_url}
        />
      ))}
    </Container>
  );
};

export default Issue;
