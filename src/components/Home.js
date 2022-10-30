import React, { useState, useEffect } from 'react'
import './home.css';
import Projects from './Projects';
import resume from '../images/docs/Modern Grey Resume .pdf';

export default function Home(props) {

    const [skillFilter, setSkillFilter] = useState(0);

    document.addEventListener('scroll', (e) => {

        if (window.scrollY > 100) {
            document.querySelector('.scroll-down').style.display = 'none';

        } else {
            document.querySelector('.scroll-down').style.display = 'block';
        }

        if (document.getElementById('home').getBoundingClientRect().top <= 200) {
            props.setActiveNav(0);
        }
        if (document.getElementById('skill').getBoundingClientRect().top <= 200) {
            props.setActiveNav(1);
        }
        if (document.getElementById('projects').getBoundingClientRect().top <= 200) {
            props.setActiveNav(2);
        }
        if (document.getElementById('resume').getBoundingClientRect().top <= 200) {
            props.setActiveNav(3);
        }
    })

    useEffect(() => {
        const name = document.getElementById('myName').innerText;
        document.documentElement.style.setProperty('--name-steps', name.length);

        let i = 0;
        while (i < 100) {
            const dGrid = document.createElement('div');
            dGrid.className = 'hero-grid-items';
            document.querySelector('.hero-grid').appendChild(dGrid);
            i = i + 1;
        }
    }, [])

    return (
        <div className='HomeBody'>
            <div id="home"></div>
            <div className="hero">
                <div className="intro">
                    <h1 id='myName'>Hello, my name is <a target="_blank" rel="noreferrer" href='#your_link'>Your Name</a>.</h1>
                    <p>I am a Full-Stack Developer.</p>
                </div>
                <div className="profile">
                    <img src='https://i.pinimg.com/564x/2a/d1/34/2ad1343f82f1825bd51573a8e5bb1e0c.jpg' alt="" />
                </div>
                <div className="scroll-down"></div>
                <div className="hero-grid"></div>
            </div>

            <div id='skill' ></div>
            <div className="skills">
                <h2 className='h2-heading'>&#60;!-- My Skills --&#62;</h2>
                <div className="skills-container">
                    <ul className="skill-filter">
                        <li onClick={() => setSkillFilter(0)} className={skillFilter === 0 ? 'sf-active' : ''}>&#123;All&#125;</li>
                        <li onClick={() => setSkillFilter(1)} className={skillFilter === 1 ? 'sf-active' : ''}>&#123;Frontend&#125;</li>
                        <li onClick={() => setSkillFilter(2)} className={skillFilter === 2 ? 'sf-active' : ''}>&#123;Backend & Database&#125;</li>
                        <li onClick={() => setSkillFilter(3)} className={skillFilter === 3 ? 'sf-active' : ''}>&#123;Software Dev.&#125;</li>
                    </ul>
                    <div className="skill-list">
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-1'></li><li className='skill-li-back'>React.Js</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 2 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-2'></li><li className='skill-li-back'>Django</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 2 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-3'></li><li className='skill-li-back'>Node.Js</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-4'></li><li className='skill-li-back'>Python</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-5'></li><li className='skill-li-back'>JavaScript</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-6'></li><li className='skill-li-back'>HTML5</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-7'></li><li className='skill-li-back'>CSS3</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-8'></li><li className='skill-li-back'>Responsive Layout</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-9'></li><li className='skill-li-back'>Bootstrap</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 1 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-10'></li><li className='skill-li-back'>Material UI</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-11'></li><li className='skill-li-back'>Data Structure</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-12'></li><li className='skill-li-back'>Object Oriented</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-13'></li><li className='skill-li-back'>Java</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-14'></li><li className='skill-li-back'>C++</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-15'></li><li className='skill-li-back'>C</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-16'></li><li className='skill-li-back'>VB .net</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 3 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-17'></li><li className='skill-li-back'>Git</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 2 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-18'></li><li className='skill-li-back'>MongoDB</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 2 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-19'></li><li className='skill-li-back'>MySQL</li></div></ul>}
                        {(skillFilter === 0 ? true : skillFilter === 2 ? true : false) && <ul><div className="skill-list-item"><li className='skill-li-front skill-20'></li><li className='skill-li-back'>SQLite</li></div></ul>}
                    </div>
                </div>
            </div>

            <div id='projects' ></div>
            <div className="my-projects">
                <h2 className='h2-heading'>&#60;!-- My Projects --&#62;</h2>
                <div className="projects-container">
                    <Projects />
                </div>
            </div>

            <div id='resume'></div>
            <div className="my-resume">
                <h2 className='h2-heading'>&#60;!-- My Resume --&#62;</h2>

                <div className="resume-container">
                    <img src={require('../images/docs/Modern Grey Resume .png')} alt="resume" />
                </div>
                <a className="pdf-download" href={resume} target='_blank'>
                    <div>Download</div>
                </a>
            </div>

            <div className="footer">
                <div className="copyright">
                    <p>COPYRIGHT &#169; 2022 | DESIGNED AND DEVELOPED BY:&nbsp;<a href="https://www.linkedin.com/in/satyamnagar" rel="noreferrer" target="_blank"><span>SATYAM NAGAR</span></a>
                    </p>
                </div>
            </div>
        </div>
    )
}
