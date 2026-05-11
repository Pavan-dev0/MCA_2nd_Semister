// Inject CSS via JS
const style = document.createElement("style");
style.innerHTML = `
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f172a, #020617);
    font-family: Arial, sans-serif;
    color: white;
  }

  .container {
    width: 400px;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .song {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 12px;
    background: rgba(255,255,255,0.08);
    transition: 0.3s;
  }

  .song:hover {
    background: rgba(255,255,255,0.18);
    transform: scale(1.03);
  }

  .info h3 {
    margin: 0;
    font-size: 16px;
  }

  .info p {
    margin: 0;
    font-size: 12px;
    color: #cbd5f5;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .play-btn {
    background: #22c55e;
    border: none;
    padding: 6px 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .play-btn:hover {
    background: #4ade80;
  }
`;
document.head.appendChild(style);

// Parent Data (like props)
const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
  { id: 3, title: "Shape of You", artist: "Ed Sheeran", duration: "4:02" },
  { id: 4, title: "Peaches & Cream", artist: "Lo-Fi Beats", duration: "2:45" }
];

// Parent Component
function App(songData) {
  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "My Playlist";

  container.appendChild(title);
  container.appendChild(Playlist(songData));

  return container;
}

// Child Component
function Playlist(songList) {
  const wrapper = document.createElement("div");

  songList.forEach(song => {
    wrapper.appendChild(SongCard(song));
  });

  return wrapper;
}

// Nested Child
function SongCard(song) {
  const card = document.createElement("div");
  card.className = "song";

  const info = document.createElement("div");
  info.className = "info";

  const title = document.createElement("h3");
  title.innerText = song.title;

  const artist = document.createElement("p");
  artist.innerText = song.artist;

  info.appendChild(title);
  info.appendChild(artist);

  const controls = document.createElement("div");
  controls.className = "controls";

  const duration = document.createElement("span");
  duration.innerText = song.duration;

  const button = document.createElement("button");
  button.className = "play-btn";
  button.innerText = "▶";

  controls.appendChild(duration);
  controls.appendChild(button);

  card.appendChild(info);
  card.appendChild(controls);

  return card;
}

// Mount everything to body (NO HTML needed)
document.body.appendChild(App(songs));