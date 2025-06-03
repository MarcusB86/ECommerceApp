import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/cart">🛒 Cart</Link>
      {user ? (
        <>
          <span>👤 {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">🔓 Login</Link>
          <Link to="/signup">📝 Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
