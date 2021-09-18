import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetail";

const App = () => {
  return (
    <>
      <h1>Songs App</h1>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
        </div>
        <div className="ui row">
          <div className="column eight wide">
            <SongDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
