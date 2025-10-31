import React, { useState } from "react";
import "./Optimize.css";

const Optimize: React.FC = () => {
  const items: string[] = ["Comedy", "Drama", "Action", "Horror"];
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div id="optimize-bar">
      {items.map((item) => (
        <label id="optimize-lebel" key={item}>
          <input
            id="optimize-checkbox"
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => toggle(item)}
          />
          {item}
        </label>
      ))}
      <div id="status-bar">
        <p id="status-text">Stauts:</p>
        <p id="status-selected">Selected: {selected.join(", ")}</p>
      </div>
    </div>
  );
};
export default Optimize;
