import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <h2>Select a song for details</h2>;
  }
  return (
    <div>
      <h2>Song Details:</h2>
      <h3>Title: {song.title}</h3>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
