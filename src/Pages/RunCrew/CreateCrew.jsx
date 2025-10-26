import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateCrew() {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!name || !inviteCode) return alert("All fields required.");
    setLoading(true);
    try {
      const res = await fetch("/api/crew/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          inviteCode,
          leaderUserId: "temp-user-id" // TODO: replace with real auth logic
        })
      });
      const data = await res.json();

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("crew", JSON.stringify(data.crew));

      navigate("/runcrew-home");
    } catch (err) {
      console.error("Error creating crew", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.explainer}>
        Thanks for starting up a crew.  
        Think of this as your Life360 circle.  
        Create a name, a unique join code (something everyone can remember),  
        and start running together.
      </p>

      <input
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Crew Name"
      />

      <input
        style={styles.input}
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        placeholder="Crew Join Code"
      />

      <button style={styles.button} onClick={handleCreate} disabled={loading}>
        {loading ? "Creating..." : "Let's Go"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
    textAlign: "center"
  },
  explainer: {
    maxWidth: "400px",
    margin: "0 auto 2rem",
    fontSize: "1rem"
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "400px",
    borderRadius: "6px",
    border: "none",
    margin: "0.75rem 0"
  },
  button: {
    marginTop: "2rem",
    padding: "0.75rem 2rem",
    fontSize: "1.1rem",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
