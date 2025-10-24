import React, { useState, useEffect } from 'react';

const messages = [
  "Quiet effort still builds strong foundations.",
  "You showed up. That’s the kind of strong that lasts.",
  "Flowers bloom whether you see them or not.",
  "Take the pressure off. You’re still becoming.",
  "Not every gain shows up on the watch.",
  "Peace isn’t found — it’s made in small moments.",
  "You don’t have to feel fast to be moving forward."
];

const actions = [
  "Take 3 deep breaths before you move on.",
  "Step outside and look up for 10 seconds.",
  "Think of one thing that helped today.",
  "Put your hand on your chest. That’s you — still here.",
  "Stretch your arms above your head and let go."
];

const emojiOptions = [
  { emoji: "🧱", label: "Wrecked" },
  { emoji: "😩", label: "Wanna puke" },
  { emoji: "😐", label: "Meh" },
  { emoji: "😶‍🌫️", label: "Foggy" },
  { emoji: "💪", label: "Still grinding" },
  { emoji: "🙂", label: "Steady" },
  { emoji: "🔥", label: "Locked in" }
];

const MentalReplenishment = () => {
  const [message, setMessage] = useState('');
  const [action, setAction] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
    setToday(date);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setAction(actions[Math.floor(Math.random() * actions.length)]);
  }, []);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="mental-replenish-container">
      <h2 className="date">{today}</h2>
      <p className="subhead">Running can be hard. You’re allowed to breathe.</p>

      <div className="emoji-check">
        <p className="emoji-prompt">What’s your vibe today?</p>
        <div className="emoji-row">
          {emojiOptions.map((option, index) => (
            <button
              key={index}
              className={`emoji-btn ${selectedEmoji === option.emoji ? 'selected' : ''}`}
              onClick={() => handleEmojiSelect(option.emoji)}
            >
              <div className="emoji-icon">{option.emoji}</div>
              <div className="emoji-label">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="thought-box">
        <p className="thought">{message}</p>
      </div>

      <div className="action-box">
        <p className="action">{action}</p>
      </div>

      <div className="footer-btns">
        <button onClick={() => alert("Journal feature coming soon!")}>
          Breathe + Reflect
        </button>
        <button onClick={() => window.history.back()}>
          Back to Training
        </button>
      </div>
    </div>
  );
};

export default MentalReplenishment;
