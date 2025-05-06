import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">💳 Shoplicity</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home 🏚️</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/login">Login 🔓</Link>
      </div>
    </nav>
  );
};

export default Navbar;
