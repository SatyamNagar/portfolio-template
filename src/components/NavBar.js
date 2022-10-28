import React from 'react'
import './navbar.css';

export default function NavBar(props) {

    //for Desktop

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            document.getElementById('NavbarBody').style.transition = '.8s all';
            document.getElementById('NavbarBody').style.transform = 'translateY(-150%)';

        } else if (event.deltaY < 0) {
            document.getElementById('NavbarBody').style.transition = '.8s all';
            document.getElementById('NavbarBody').style.transform = 'translateY(0%)';
        }
    });

    window.addEventListener('scroll', () => {
        window.scrollY !== 0 ? document.getElementById('NavbarBody').className = 'NavbarBody active' : document.getElementById('NavbarBody').className = 'NavbarBody';
    })


    //for Touch Devices

    let startingY, movingY;
    document.addEventListener('touchstart', function (e1) {
        startingY = e1.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (e1) {
        movingY = e1.touches[0].clientY;
    });

    document.addEventListener('touchend', function () {
        if (startingY + 100 < movingY) {
            document.getElementById('NavbarBody').style.transition = '.8s all';
            document.getElementById('NavbarBody').style.transform = 'translateY(0%)';

        } else if (startingY - 100 > movingY) {
            document.getElementById('NavbarBody').style.transition = '.8s all';
            document.getElementById('NavbarBody').style.transform = 'translateY(-150%)';
        }
    });

    const customTheme = (color) => {
        document.documentElement.style.setProperty('--theme', color);
    }


    return (
        <div className='NavbarBody' id='NavbarBody'>
            <div className="nav-container">
                <div className="logo">

                </div>
                <ul className='menu'>
                    <li className={props.activeNav === 0 ? 'nav-active' : ''}><a href="#home">&#47;&#47; home</a></li>
                    <li className={props.activeNav === 1 ? 'nav-active' : ''}><a href="#skill">&#47;&#47; skills</a></li>
                    <li className={props.activeNav === 2 ? 'nav-active' : ''}><a href="#projects">&#47;&#47; projects</a></li>
                    <li className={props.activeNav === 3 ? 'nav-active' : ''}><a href="#resume">&#47;&#47; resume</a></li>
                </ul>
                <div className="color-palette">
                    <div className="bg-color-btn" style={{ background: 'red' }} onClick={() => { customTheme('red') }}></div>
                    <div className="bg-color-btn" style={{ background: 'bisque' }} onClick={() => { customTheme('bisque') }}></div>
                    <div className="bg-color-btn" style={{ background: 'turquoise' }} onClick={() => { customTheme('turquoise') }}></div>
                    <div className="bg-color-btn" style={{ background: 'rgb(0, 183, 255)' }} onClick={() => { customTheme('rgb(0, 183, 255)') }}></div>
                </div>
            </div>
        </div>
    )
}
