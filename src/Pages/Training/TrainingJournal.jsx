import React, { useState, useEffect } from 'react';

const TrainingJournal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('gofast-journal-entries')) || [];
    setEntries(saved);
  }, []);

  const handleSave = () => {
    if (!entry.trim()) return;

    const newEntry = {
      text: entry.trim(),
      timestamp: new Date().toLocaleString()
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('gofast-journal-entries', JSON.stringify(updated));
    setEntry('');
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
        Reflect on your journey
      </h2>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        What’s coming up as you train, race, or just keep showing up?
      </p>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write whatever you need..."
        rows={5}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "12px"
        }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 16px",
          fontSize: "0.95rem",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "24px"
        }}
      >
        Save Entry
      </button>

      <div>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>Your Past Reflections</h3>
        {entries.length === 0 && <p style={{ color: "#888" }}>No entries yet.</p>}
        {entries.map((e, i) => (
          <div
            key={i}
            style={{
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              textAlign: "left"
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#333", marginBottom: "4px" }}>
              {e.text}
            </p>
            <span style={{ fontSize: "0.75rem", color: "#777" }}>{e.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingJournal;