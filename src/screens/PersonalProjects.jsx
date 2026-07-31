import React from "react";
import './About.css';
import social from '../background/socialmediabrowser.png';
import Tileinfo from '../assets/Tileinfo.json';







export default function PersonalProject() {


    return (
        <div className='about-container'> Personal Projects
            <div className= 'tile'>
                <div className="category">Social Media Browser</div>
                <img className="pic" src={social}  alt="social"/>
                <a className="pic" href="https://social-media-browser-git-master-web-ways.vercel.app/"/>
                <div className="info"> {Tileinfo.Me.social} </div>
            </div>
        </div>
    );
}