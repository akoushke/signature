import React from "react";
import Background from "./components/Background";
import Header from "./widgets/Header";
import Body from "./widgets/Body";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Background />
      <Body />
    </>
  );
}

export default App;
