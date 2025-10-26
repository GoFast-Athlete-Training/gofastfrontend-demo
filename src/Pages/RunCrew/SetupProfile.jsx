import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetupProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: user?.displayName || "",
    pace: "",
    bio: "",
    goal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          preferredName: form.name,
          pace: form.pace,
          bio: form.bio,
          goal: form.goal,
        }),
      });

      const result = await response.json();
      console.log("Profile saved:", result);

      // On success, go to next step
      navigate("/crew-choice");

    } catch (err) {
      console.error("Profile save failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Welcome! Let’s Finish Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Preferred Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Pace (e.g. 8:00 /mi):</label>
        <input name="pace" value={form.pace} onChange={handleChange} required />

        <label>Short Bio:</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} />

        <label>Your Goal:</label>
        <select name="goal" value={form.goal} onChange={handleChange} required>
          <option value="">Select One</option>
          <option value="Stay consistent">Stay consistent</option>
          <option value="Run a 5K">Run a 5K</option>
          <option value="Crush a PR">Crush a PR</option>
          <option value="Find my crew">Find my crew</option>
        </select>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Next: Find Your Crew
        </button>
      </form>
    </div>
  );
}
