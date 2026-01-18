import { useState } from "react";

const vibes = [
  { id: "easy", label: "Easy-Breezy", desc: "< 1 mile, < 20 min" },
  { id: "latte", label: "Latte", desc: "1-2 mi, 20-40 min" },
  { id: "heat", label: "Heating Up", desc: "2-4 mi, 40-60 min" },
  { id: "chall", label: "Challenging", desc: "4+ mi, 60+ min" }
];

export default function VibePicker() {
  const [picked, setPicked] = useState("easy");
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {vibes.map((v) => (
        <button
          key={v.id}
          onClick={() => setPicked(v.id)}
          className={`p-4 rounded-xl border-2 transition ${
            picked === v.id
              ? "border-clay bg-clay text-white"
              : "border-gray-300 hover:border-clay"
          }`}
        >
          <div className="font-graffiti text-2xl">{v.label}</div>
          <div className="text-xs mt-1">{v.desc}</div>
        </button>
      ))}
    </div>
  );
}
