import React from "react";
import "./App.css";
import MUSIC_UI from "./components/MUSIC_UI";

import song1 from "./assets/CountDown.mp3";
import song2 from "./assets/Pixel_noice.mp3";
import song3 from "./assets/CountDown.mp3";

function App() {
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      file: song1
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      duration: "3:23",
      file: song2
    },
    {
      id: 3,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "4:02",
      file: song3
    }
  ];

  return (
    <div className="App">
      <MUSIC_UI songs={songs} />
    </div>
  );
}

export default App;
