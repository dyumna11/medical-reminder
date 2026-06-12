import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Auth.css";

function Signup() {
    const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSignup}>
        <h1 className="auth-title">Sign Up</h1>

        <input
          className="auth-input"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

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
          Register
        </button>
        <p className="auth-switch">
  Already have an account?
  <span onClick={() => navigate("/login")}>
    Login
  </span>
</p>
      </form>
     
    </div>
  );
}

export default Signup;