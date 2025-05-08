import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="homepage">
  <h1>Welcome to Shoplicity</h1>
  <p>Buy & sell any and everything</p>

    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">💳 Shoplicity</Link>
      </div>
      <div className="navbar-search">
    <input type="text" placeholder="Search..." />
    <button>Search</button>
  </div>
      <div className="navbar-links">
        <Link to="/">Home 🏚️</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/login">Login 🔓</Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
