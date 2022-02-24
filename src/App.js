import Home from "./pages/home";
import Navigation from "./components/Navigation";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0 auto;
  font-family: 'Source Sans Pro', sans-serif;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: inherit;
} 
`;

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Navigation />
      <Home />
    </RecoilRoot>
  );
};

export default App;
