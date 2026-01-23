import {React} from 'react';
import './StartScreen.css';

export default function StartScreen({onStart }) {
    return (
        <div className="start-screen">
            <h1 className='title'>Chess-X</h1>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}