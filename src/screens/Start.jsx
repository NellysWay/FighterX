import {React} from 'react';
import './StartScreen.css';
import { useRef, useState } from 'react';



export default function StartScreen({onStart }) {
    
   

    return (
        <div className= 'start-screen'>
            <div className='naruto'> here</div>
            <div className='speech-bubble'> Welcome! </div>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}