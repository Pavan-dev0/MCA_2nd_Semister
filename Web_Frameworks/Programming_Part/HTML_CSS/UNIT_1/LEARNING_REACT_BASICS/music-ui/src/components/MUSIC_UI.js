import React, { useEffect, useRef, useState } from "react";
import "./music.css";

function MUSIC_UI({ songs }) {
  const audioRef = useRef(null);
  const [currentSongId, setCurrentSongId] = useState(songs[0]?.id ?? null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong = songs.find((song) => song.id === currentSongId) || songs[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const loadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongId]);

  const handlePlayPause = (songId) => {
    if (songId === currentSongId) {
      setIsPlaying((prev) => !prev);
      return;
    }

    setCurrentSongId(songId);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const index = songs.findIndex((song) => song.id === currentSongId);
    const prevIndex = index <= 0 ? songs.length - 1 : index - 1;
    setCurrentSongId(songs[prevIndex].id);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const index = songs.findIndex((song) => song.id === currentSongId);
    const nextIndex = index === songs.length - 1 ? 0 : index + 1;
    setCurrentSongId(songs[nextIndex].id);
    setIsPlaying(true);
  };

  const handleSeek = (event) => {
    const value = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="container">
      <h1 className="title">My Playlist</h1>

      <div className="player-card">
        <div className="now-playing">
          <div className="song-info">
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>
          </div>
          <div className="player-controls">
            <button className="control-btn" onClick={handlePrev}>
              ⏮
            </button>
            <button className="play-btn main" onClick={() => handlePlayPause(currentSong.id)}>
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button className="control-btn" onClick={handleNext}>
              ⏭
            </button>
          </div>
        </div>

        <div className="progress-row">
          <span>{formatTime(currentTime)}</span>
          <input
            className="progress-slider"
            type="range"
            min="0"
            max={duration || 0}
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="playlist">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={song.id === currentSongId && isPlaying}
            onPlay={() => handlePlayPause(song.id)}
          />
        ))}
      </div>

      <audio ref={audioRef} src={currentSong.file} preload="metadata" />
    </div>
  );
}

function SongCard({ song, isPlaying, onPlay }) {
  return (
    <div className={`song ${isPlaying ? "active" : ""}`}>
      <div className="info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <div className="controls">
        <span>{song.duration}</span>
        <button className="play-btn" onClick={onPlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}

export default MUSIC_UI;
