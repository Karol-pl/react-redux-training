import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetail";

const App = () => {
  return (
    <div className="app">
      <h1>Songs App</h1>
      <SongList />
      <SongDetails />
    </div>
  );
};

export default App;
