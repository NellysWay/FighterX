import {React} from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';



export default function StartScreen({onStart }) {
   

    return (
          <div className= 'header-container'>
            <div className='photo'></div>
            <div className='name'>Hi, I'm Nelson</div>
            <div className='title'> Software Engineer</div>
          </div>
    );
}