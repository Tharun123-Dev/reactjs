function Header() {
  return (
    <div className="header">
      <div className="header-left">
        ☰ <span className="logo">YouTube</span>
      </div>

      <div className="header-center">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
        <span className="mic">🎤</span>
      </div>

      <div className="header-right">
        ➕ 🔔 👤
      </div>
    </div>
  );
}

export default Header;
