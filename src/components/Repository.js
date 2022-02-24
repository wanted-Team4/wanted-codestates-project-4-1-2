import { useState } from "react";
import styled from "styled-components";
import Issue from "./Issue";
import Search from "./Search";
import "../styles/repo.css";

const Section = styled.section`
  width: 100%;
`;
const TabContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  list-style: none;
`;

const TabBox = styled.div`
  padding-bottom: 15px;
`;

const TabLi = styled.li`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding-top: 40px;
  width: 50%;
  cursor: pointer;
`;

const TabInfoBox = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Repository = () => {
  // active를 담아줄 상태값
  const [activeIndex, setActiveIndex] = useState(0);

  // 저장된 index 정보로 active 핸들링
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  // tab
  const tabArray = [
    {
      idx: 0,
      tabTitle: (
        <TabBox
          className={
            activeIndex === 0 ? "is-active tabs_select" : "tabs_noneSelect"
          }
          onClick={() => tabClickHandler(0)}
        >
          Search
        </TabBox>
      ),
      tabcontent: <Search />,
    },
    {
      idx: 1,
      tabTitle: (
        <TabBox
          className={
            activeIndex === 1 ? "is-active tabs_select" : "tabs_noneSelect"
          }
          onClick={() => tabClickHandler(1)}
        >
          Issue
        </TabBox>
      ),
      tabcontent: <Issue />,
    },
  ];

  return (
    <Section>
      <TabContainer>
        {tabArray.map((li) => {
          return <TabLi key={li.idx}>{li.tabTitle}</TabLi>;
        })}
      </TabContainer>
      <TabInfoBox>{tabArray[activeIndex].tabcontent}</TabInfoBox>
    </Section>
  );
};

export default Repository;
