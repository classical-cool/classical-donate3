import React from "react";
import logo from "./logo.svg";
// import renderDonate3 from "donate3-sdk";
// import { Donate3 } from "donate3-sdk";
import { Foo, Donate3, Wagmi } from "donate3-sdk";
import "./App.css";

function App() {
  // console.log(Donate3);
  const config = {
    type: 1,
    color: "#396AFF",
    name: "Charity3",
    address: "0xb86EB6f8a39Db243a9ae544F180ef958dBA4e8b4",
  };

  return (
    <div className="App">
      {/* <Donate3 config={config}></Donate3> */}
      <Wagmi></Wagmi>
      {/* <Foo title="ufo"></Foo> */}
      <header className="App-header">react test</header>
    </div>
  );
}

export default App;
