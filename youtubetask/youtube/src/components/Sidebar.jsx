function Sidebar({ setShowMusic }) {
  return (
    <div className="sidebar">
      <p onClick={() => setShowMusic(false)} className="active">🏠 Home</p>
      <p>▶ Shorts</p>
      <p onClick={() => setShowMusic(true)}>🎵 Music</p>
      <p>📺 Subscriptions</p>

      <hr />

      <p>📁 Library</p>
      <p>🕒 History</p>
      <p>⏱ Watch Later</p>
      <p>👍 Liked Videos</p>
    </div>
  );
}

export default Sidebar;
