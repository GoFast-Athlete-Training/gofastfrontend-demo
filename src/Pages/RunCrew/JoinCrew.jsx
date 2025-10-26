// JoinCrew.jsx - Scaffolded for frontend/components
import React, { useState } from 'react';

export default function JoinCrew() {
  const [inviteCode, setInviteCode] = useState("");

  const handleJoin = async () => {
    const res = await fetch("/api/crew/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inviteCode })
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Enter your invite code:</h2>
      <input value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} />
      <button onClick={handleJoin}>Join Crew</button>
    </div>
  );
}