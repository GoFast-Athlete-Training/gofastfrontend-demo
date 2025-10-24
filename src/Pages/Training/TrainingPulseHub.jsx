import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingPulseHub = () => {
const navigate = useNavigate();

const tiles = [
{
icon: "🏃",
label: "Today's Workout",
onClick: () => navigate("/pulse/today"),
},
{
icon: "📅",
label: "Week View",
onClick: () => navigate("/pulse/week"),
},
{
icon: "🧠",
label: "Mental Replenishment",
onClick: () => navigate("/mental-replenishment"),
},
{
icon: "📰",
label: "Runner News",
onClick: () => navigate("/pulse/news"),
},
];

return (
<div className="p-4 max-w-3xl mx-auto">
<h1 className="text-3xl font-bold mb-2">Training Pulse</h1>
<p className="text-gray-700 mb-8">
This is your central zone to track your progress, stay grounded, and get ready for the week.
You’ll find training here — and lock it in. Let’s go fast.
</p>
<div className="grid grid-cols-2 gap-4">
{tiles.map((tile, idx) => (
<div
key={idx}
onClick={tile.onClick}
className="flex flex-col items-center justify-center border rounded-lg p-6 bg-gray-100 hover:bg-gray-200 cursor-pointer"
>
<div className="text-4xl mb-2">{tile.icon}</div>
<div className="text-lg font-medium text-center">{tile.label}</div>
</div>
))}
</div>
</div>
);
};

export default TrainingPulseHub;