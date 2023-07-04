import React, { useState } from "react";
const Song = ({ song, likeSong }) => {
  return (
    <div className="cancion">
      <div className="cancion__img">
        <img src={song.cover_url} alt="imagen del album" />
      </div>
      <div className="cancion__text">
        <h3>{song.artist}</h3>
        <h6>{song.album}</h6>
        <h3>{song.name}</h3>
        <p>{song.year}</p>
        <h5>
          <div className="cancion__text--genero">{song.genre}</div>
        </h5>
        <button
          className={`like-button ${song.like ? "liked" : ""}`}
          onClick={() => likeSong(song.id)}
        >
          {song.like ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
      </div>
    </div>
  );
};
export default Song;