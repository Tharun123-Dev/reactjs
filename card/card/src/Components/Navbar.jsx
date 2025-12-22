import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1> BookVerse</h1>
      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>About</li>
        <li>Cart ({cartCount})</li>
      </ul>
    </nav>
  );
};

export default Navbar;
