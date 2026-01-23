import { React } from 'react';
import './CharacterSelect.css';

export default function CharacterSelect({ onBack, onSelect }) {
    return (
        <div className="character-select-screen">
            <h1 className="title">Character Select Screen</h1>
            <button className="back" onClick={onBack}>Back to Main Menu</button>
            <div className="characters">    </div>

            <div className="character-cards" onClick={onSelect}> 1 </div>
            

        </div>
    );
}