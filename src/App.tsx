import React, { useState } from "react";
import "./index.css"; // Make sure this is here!

interface Section {
  title: string;
  content: string[];
  color: string;
}

const sections: Section[] = [
  {
    title: "📍 Where to Buy",
    content: [
      "Govt shops (9 AM - 10 PM)",
      "Model shops in malls",
      "Bars & restaurants (on-site only)",
      "Duty-free (limit: 2L)",
    ],
    color: "#FFEB3B",
  },
  {
    title: "⚖️ Legal Stuff",
    content: [
      "Legal drinking age: 25",
      "Carry ID (Digilocker okay!)",
      "Dry Days: Jan 26, Aug 15, Oct 2, elections",
    ],
    color: "#FFC107",
  },
  {
    title: "🚚 Home Delivery",
    content: [
      "Allowed via private vendors",
      "Check zone limits & delivery hours",
    ],
    color: "#4CAF50",
  },
  {
    title: "👩 Tips for Women",
    content: [
      "Go during the day",
      "Know what you want",
      "Carry a tote bag for privacy",
    ],
    color: "#E91E63",
  },
  {
    title: "🍺 Popular Brands",
    content: [
      "Indian: Bira 91, Kingfisher, Simba",
      "Imported: Budweiser, Corona, Hoegaarden",
    ],
    color: "#2196F3",
  },
  {
    title: "🛍️ Final Tips",
    content: [
      "Drink responsibly",
      "Not in public please!",
      "Check store hours & prices",
    ],
    color: "#9C27B0",
  },
];

const App: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container">
      <h1 className="title">🍻 Beer Guide to Delhi</h1>
      <div className="speech-bubble">🍾 Psst! Click a card for tips!</div>
      <div className="cards">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`card ${openIndex === index ? "open" : ""}`}
            style={{ backgroundColor: sec.color }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="card-title">{sec.title}</div>
            {openIndex === index && (
              <ul className="card-content">
                {sec.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
