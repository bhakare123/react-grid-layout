import React from "react";
import "./App.css";

function App() {
  const items = [
    { id: 1, title: "Card 1", description: "Grid item number 1" },
    { id: 2, title: "Card 2", description: "Grid item number 2" },
    { id: 3, title: "Card 3", description: "Grid item number 3" },
    { id: 4, title: "Card 4", description: "Grid item number 4" },
    { id: 5, title: "Card 5", description: "Grid item number 5" },
    { id: 6, title: "Card 6", description: "Grid item number 6" }
  ];

  return (
    <div className="container">
      <h1>React Grid Layout Example</h1>
      <div className="grid">
        {items.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
