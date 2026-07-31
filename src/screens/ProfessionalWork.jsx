import React from "react";
import './About.css';
import Tileinfo from '../assets/Tileinfo.json';
import ajla from '../background/ajla.png';


export default function ProWork() {
    return (
        <div className="about-container"> Professional Work
            <div className="tile">
               <div className="topic">{Tileinfo.Me.joblink}</div> 
                <img className="pic" src={ajla} />
                <div className="experience">{Tileinfo.Me.summary}</div>
            </div>
        </div>
    );
}