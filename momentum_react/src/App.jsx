import React from "react";
import Background from "./components/Background";
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Quote from "./components/Quote";
import ToDo from "./components/ToDo";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background />
      <Clock />
      <Greeting />
      <Quote />
      <ToDo />
      <Weather />
    </div>
  );
}

export default App;
