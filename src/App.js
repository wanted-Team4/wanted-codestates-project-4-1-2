import Home from "./pages/home";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/configure";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Home />
    </Provider>
  );
};

export default App;
