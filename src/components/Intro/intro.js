import React from 'react';
import './intro.css';
import bg from '../../assets/pratikshya.jpg';
import {Link} from 'react-scroll';

const Intro=() => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Pratikshya Karki</span> <br/>Data Science Enthusiast</span>
                <p className="introPara">This is my project work for building a website with React so, I thought of building a ebsite that showcases my own portfolio</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;