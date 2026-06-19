import React, { useState } from 'react';
import './CharacterSelect.css';
import CharacterCard from '../characters/CharacterCard.jsx';

export default function CharacterSelect({ onBack, onSelect }) {
    const [selectedId, setSelectedId] = useState(null);

    const characters = [
        {id: 1, name: "King", image:"./background/kingtraining.jpg"},
        {id: 2, name: "Queen", image:"./background/kingtraining.jpg"},
        {id: 3, name: "Bishop", image:"./background/kingtraining.jpg"},
        {id: 4, name: "", image:"./background/kingtraining.jpg"},
        {id: 5, name: "King", image:"./background/kingtraining.jpg"},
        {id: 6, name: "King", image:"./background/kingtraining.jpg"}
    ]
    return (
        <div className="character-select-screen">
            <h1 className="select-screen">Character Select Screen</h1>
            <button className="back" onClick={onBack}>Back to Main Menu</button>
            <div className="characters">    </div>

            <div className="character-select-container">
                {characters.map((char) => (
                    <CharacterCard
                        key={char.id}
                        character={char}
                        isSelected={selectedId === char.id}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>
            

        </div>
    );
}