import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Till I Collapse", duration: "4:05" },
    { title: "Superman", duration: "4:15" },
    { title: "Mockingbird", duration: "5:25" },
    { title: "One more time", duration: "3:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
