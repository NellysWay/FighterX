import {React, useState} from 'react';
import './About.css';
import Tileinfo from '../assets/Tileinfo.json';
import graduation from '../background/graduation.jpg';
import soccer from '../background/nelsonsoccer.jpg'; 
import track from '../background/track2018.jpg';
import esports from '../background/luesports.png'

export default function About() {
    const [playing, setPlaying] = useState(false);

    return (
        <div className='about-container'> About
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
                {!playing ? (
                    <img className='pic' src={esports} alt="Play Trailer"
                        onClick={() => setPlaying(true)}
                        style={{ cursor: "pointer" }}
                    /> 
                ) : (
                    <iframe
                        width="375"
                        height="450"
                        src="https://www.youtube.com/embed/jgFXVXAEkHc?autoplay=1"
                        allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                
                )}
                <div className='info'>{Tileinfo.Me.esports}</div>
            </div>
        </div>
    );
}