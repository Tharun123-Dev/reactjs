import "./MediaSection.css";

const MediaSection = () => {
  return (
    <section className="media-section">

      {/* LEFT SIDE – AUDIO */}
      <div className="audio-box">
        <h2>📖 Book Theme Music</h2>
        <p>Enjoy calm background music while exploring books</p>

        <audio controls>
          <source src="book-music.mp3" type="audio/mp3" />
          Your browser does not support audio.
        </audio>
      </div>

      {/* RIGHT SIDE – VIDEO */}
      <div className="video-box">
        <h2>🎬 Book Demo Video</h2>
        <p>Watch a short preview of our book collection</p>

        <video controls>
          <source src="book-demo.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>

    </section>
  );
};

export default MediaSection;
