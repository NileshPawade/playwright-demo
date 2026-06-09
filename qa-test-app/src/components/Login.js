import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields required");
      return;
    }

    if (email === "test@test.com" && password === "1234") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input className="login-field" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="login-field" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={handleLogin}>Login</button>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
}
