import { useState } from "react";

const API = "http://localhost:8000/auth";

export default function AuthPage({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");

    const endpoint = mode === "login" ? "/login" : "/register";
    const payload = mode === "login"
      ? { email, password }
      : { name, email, password, role };

    try {
      const res = await fetch(`${API}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      onAuth(data.token, data.user);
    } catch (error) {
      setMessage(error.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{mode === "login" ? "Login" : "Register"}</h1>
        <p>Use your account to continue.</p>

        <form onSubmit={submit} className="auth-form">
          {mode === "register" && (
            <>
              <label>
                Name
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Role
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
            </>
          )}

          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <button
          type="button"
          className="link-button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Need an account? Register" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}
