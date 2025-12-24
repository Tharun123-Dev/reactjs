import song1 from "../music/song1.mp3";
import song2 from "../music/song2.mp3";
import song3 from "../music/song3.mp3";

function Music() {
  return (
    <div className="music-page">
      <h2>🎵 Music</h2>

      <div className="song">
        <p>Song One</p>
        <audio controls src={song1}></audio>
      </div>

      <div className="song">
        <p>Song Two</p>
        <audio controls src={song2}></audio>
      </div>

      <div className="song">
        <p>Song Three</p>
        <audio controls src={song3}></audio>
      </div>
    </div>
  );
}

export default Music;
