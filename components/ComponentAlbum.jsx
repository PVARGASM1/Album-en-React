import React, { useState } from "react";
import canciones from "../src/data/canciones";
import Song from "../components/Song/Song";

const ComponentAlbum = ({ canciones, replaceSongs }) => {
  const toggleLike = (songId) => {
    const updatedSongs = canciones.map((song) => {
      if (song.id === songId) {
        return {
          ...song,
          like: !song.like,
        };
      }
      return song;
    });
    replaceSongs(updatedSongs);
  };

  return (
    <div className="container">
      {canciones.map((currentSong) => (
        <Song
          song={currentSong}
          likeSong={(songId) => {
            toggleLike(songId);
          }}
          key={currentSong.id}
        />
      ))}
    </div>
  );
};
export default ComponentAlbum;