import React from "react";
import './MainMenu.css';

export default function MainMenu({onBack, onCharacterSelect}) {
    return (
        <div className="main-menu">
            <h1>Main Menu</h1>
            <button onClick={onCharacterSelect}>Character Select</button>
            <button onClick={onBack}>Back to Start Screen</button>
        </div>
    );
}