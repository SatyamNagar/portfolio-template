import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import MediaHub from './components/MediaHub';

function App() {

  const [scrollTop, setScrollTop] = useState(0);
  const [activeNav, setActiveNav] = useState(0);


  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])


  return (
    <div className="AppBody">
      <div className="progress-bar" style={{ width: `${scrollTop}%` }}></div>
      <NavBar activeNav={activeNav}/>
      <Home setActiveNav={setActiveNav}/>
      <MediaHub/>
    </div>
  );
}

export default App;
