import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const validate = () => {
    if (!form.name || !form.email || !form.password) {
      return 'All fields are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return 'Invalid email format.';
    }
    if (form.password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Signup successful!');
      console.log(res.data);
    } catch (err) {
      setError('Signup failed. Try again.');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
