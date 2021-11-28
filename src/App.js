import "./App.css";
import { React, useState } from "react";
import List from "./List.js";
import Moviecard from "./MovieCard";
import Filter from "./Filter.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <List />
    </div>
  );
}

export default App;
