import React, { useState } from "react";
import "./App.css";
import Album from "../components/ComponentAlbum";
import Title from "../components/Title/Title";
import canciones from "./data/canciones";

function App() {
  const [songs, setSongs] = useState(canciones);
  return (
    <div>
      <Title
        text="Album de Musica"
        numSongs={songs.length}
        liked={songs.filter((cancion) => cancion.like).length}
      />
      <Album
        canciones={songs}
        replaceSongs={(updatedSongs) => setSongs(updatedSongs)}
      />
    </div>
  );
}

export default App;