import React from "react";
import "./CharacterCard.css";


export default function CharacterCard({ character, isSelected, onSelect }) {
    return (
        <div
            className={`character-card ${isSelected ? "selected" : ""}`}
            onClick={() => onSelect(character.id)}
        >
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
        </div>
    );
}

