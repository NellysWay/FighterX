import {React} from 'react';
import './About.css';
import Tileinfo from '../assets/Tileinfo.json';
import graduation from '../background/graduation.jpg';
import soccer from '../background/nelsonsoccer.jpg'; 
import track from '../background/track2018.jpg';

export default function About() {
    
    return (
        <div className='about-container'>
            <div className='tile'>
                <div className='category'> College</div> 
                <img className='pic' src={graduation} alt="graduation"/>
                <div className='info'>{Tileinfo.Me.college}</div>
            </div>
            <div className='tile'>
                <div className='category'> Track & Field </div>
                <img className='pic' src={track} alt="track"/>
                <div className='info'>{Tileinfo.Me.tf}</div>
             </div>
            <div className='tile'>
                <div className='category'> Soccer </div>
                <img className='pic'src={soccer} alt="soccer"/> 
                <div className='info'>{Tileinfo.Me.soccer}</div>
            </div>
            <div className='tile'>
                <div className='category'> Esports </div>
                <img className='pic' alt="graduation"/> 
                <div className='info'>{Tileinfo.Me.esports}</div>
            </div>
        </div>
    );
}