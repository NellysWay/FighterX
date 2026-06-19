import React from "react";
import './MainMenu.css';

export default function MainMenu({onBack, onCharacterSelect}) {
    return (
        <div className="main-menu">
            <div className="main"></div>
            <div className="versus" onClick={onCharacterSelect}></div>
            <div className="back-start" ></div>
            <div className="option1">Practice</div>
            <div className="option2">Versus</div>
            <div className="option3">Coming Soon</div>
        </div>
    );
}