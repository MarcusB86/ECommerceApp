import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/">💳 Shoplicity</Link>
      <div className="navbar-links">
        <Link to="/">Home 🏚️</Link>
        <Link to="/cart">Cart 🛒</Link>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={logout}>Logout 🔒</button>
          </>
        ) : (
          <Link to="/login">Login 🔓</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
