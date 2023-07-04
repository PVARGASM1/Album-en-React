import React, {useState} from 'react';

const ComponentAlbum = () => {
    const [songs, setSongs] = useState ([
        {
            id: 0,
            name: "Rozes",
            artist: "Solista",
            album: "Under the grave",
            year: "(2016)",
            like: false,
            genre: "Dance",  
            cover_url: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0f/90/cc/0f90ccce-c3c3-93f8-4776-422566d47557/191018104702.jpg/316x316bb.webp" 
        },        
        {
          id: 1,
          name: "Billie Jean",
          artist: "Michael Jackson",
          album: "Thriller",
          year: 1982,
          like: false,
          genre: "Pop",
          cover_url: "https://i.pinimg.com/originals/65/ab/54/65ab54f32e4e715fc2981b687415d468.jpg"
        },
        {
          id: 2,
          name: "Sweet Child o' Mine",
          artist: "Guns N' Roses",
          album: "Appetite for Destruction",
          year: 1987,
          like: false,
          genre: "Rock",
          cover_url: "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
        },
        {
          id: 3,
          name: "Like a Prayer",
          artist: "Madonna",
          album: "Like a Prayer",
          year: 1989,
          like: false,
          genre: "Pop",
          cover_url: "https://www.classicpopmag.com/wp-content/webpc-passthru.php?src=https://www.classicpopmag.com/wp-content/uploads/2019/03/91etw5xmsL-1._SL1425_.jpg&nocache=1"
        },
        {
          id: 4,
          name: "Smells Like Teen Spirit",
          artist: "Nirvana",
          album: "Nevermind",
          year: 1991,
          like: false,
          genre: "Grunge",
          cover_url: "https://4.bp.blogspot.com/-pvaiepYkL3k/Uk39KdtYeSI/AAAAAAAABvA/Qs_JAChraag/s1600/nevermind.jpg"
        },
        {
          id: 5,
          name: "Wonderwall",
          artist: "Oasis",
          album: "(What's the Story) Morning Glory?",
          year: 1995,
          like: false,
          genre: "Britpop",
          cover_url: "https://cdn.shopify.com/s/files/1/0048/1325/8801/products/Oasis_-__What_s_The_Story__Morning_Glory_album_cover_600x.jpg?v=1680201131"
        },
        {
          id: 6,
          name: "Smooth",
          artist: "Santana ft. Rob Thomas",
          album: "Supernatural",
          year: 1999,
          like: false,
          genre: "Rock",
          cover_url: "https://static.stereogum.com/uploads/2019/06/santana-supernatural-1560437479.jpg"
        },
        {
          id: 7,
          name: "Crazy in Love",
          artist: "Beyoncé ft. Jay-Z",
          album: "Dangerously in Love",
          year: 2003,
          like: false,
          genre: "R&B",
          cover_url: "https://i1.sndcdn.com/artworks-000159517398-6onyu8-t500x500.jpg"
        },
        {
          id: 8,
          name: "Hey There Delilah",
          artist: "Plain White T's",
          album: "All That We Needed",
          year: 2005,
          like: false,
          genre: "Pop & Rock",
          cover_url: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/17/5a/70/175a7050-3f72-845b-92e0-176ff0c529a3/00714753007260.rgb.jpg/1200x1200bf-60.jpg"
        },
        {
          id: 9,
          name: "Umbrella",
          artist: "Rihanna ft. Jay-Z",
          album: "Good Girl Gone Bad",
          year: 2007,
          like: false,
          genre: "R&B",
          cover_url: "https://m.media-amazon.com/images/I/61h+ZI9RpyL._UF1000,1000_QL80_.jpg"
        },
        {
          id: 10,
          name: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          like: false,
          genre: "Soul",
          cover_url: "https://www.hoyesarte.com/constelac10n/files/2020/01/008.jpg"
        }]);

    const toggleLike = (songId) => {
        const updatedSongs = songs.map((song) => {
            if (song.id === songId) {
            return {
                ...song,
                like: !song.like,
            };
            }
              return song;
            });
            setSongs(updatedSongs);
          };
        
    return(
        <div className='container'>
          {songs.map((song) => (
           <main className='album' key={song.id}>
                <div className='album__img'>
                  <img src={song.cover_url} alt="imagen del album" />
                </div>
            <div className='album__text'>
                    <h3>{song.artist}</h3>
                    <h6>{song.album}</h6>
                    <h3>{song.name}</h3>
                    <p>{song.year}</p>
                    <h5><div className='genero'>{song.genre}</div></h5>
                  <button
                    className={`like-button ${song.like ? 'liked' : ''}`}
                    onClick={() => toggleLike(song.id)}
                  >
                  {song.like ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                  </button>
            </div>
           </main>))}
        </div>
    )
    }
export default ComponentAlbum;