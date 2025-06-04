import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css'; // Make sure this path is correct

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link"> SHOPLICITY 🏠 Home</Link>
        <Link to="/cart" className="nav-link">🛒 Cart</Link>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="user-email">👤 {user.email}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">🔓 Login</Link>
            <Link to="/signup" className="signup-btn">📝Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
