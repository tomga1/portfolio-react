import React, { useState } from "react";
import './Habilidades.css'; // Asegurate de tener este archivo si vas a aplicar estilos

export default function Habilidades({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="habilidades-container">
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        Habilidades {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <ul className="habilidades-list">
          {item.habilidades.split(',').map((hab, i) => (
            <li key={i}>{hab.trim()}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
