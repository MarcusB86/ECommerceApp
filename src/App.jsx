import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Signup from "./pages/Signup";
// import Cart from './components/Cart';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
