import React from "react";

const Title = ({ text, numSongs, liked }) => {
  return (
    <h1 className="title">
      {text} (Total canciones: {numSongs} | Favoritas: {liked})
    </h1>
  );
};

export default Title;