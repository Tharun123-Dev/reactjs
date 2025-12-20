import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">FREEEZE</h1>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
