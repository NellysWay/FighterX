import {React} from 'react';
import './StartScreen.css';
import { useRef, useState } from 'react';



export default function StartScreen({onStart }) {
    
   

    return (
        <div className= 'start-screen'>
            <div className='speech-bubble'> Welcome! </div>
            <div className='naruto'> </div>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}