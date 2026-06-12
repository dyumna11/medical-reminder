import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await res.json();
    console.log("Response:", data);
    localStorage.setItem(
      "token",
      data.token
    );
    navigate("/reminder");
    alert("Login Successful");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1 className="auth-title">Login</h1>

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="auth-btn">
          Login
        </button>
      

<p className="auth-switch">
  Don't have an account?
  <span onClick={() => navigate("/signup")}>
    Sign Up
  </span>
</p>
</form>
    </div>
  );
}

export default Login;