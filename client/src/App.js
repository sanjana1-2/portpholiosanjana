import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElegantCursor from './components/ElegantCursor';
import HeroElegant from './components/HeroElegant';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import AIAutomation from './components/AIAutomation';
import Certificates from './components/Certificates';
import CV from './components/CV';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import SplashScreen from './components/SplashScreen';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import './elegant.css';
import './splash-welcome.css';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  useScrollAnimations();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Show admin panel if URL has ?admin=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <Admin />;
  }

  return (
    <div className="App">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <ElegantCursor />
      <Navbar />
      <HeroElegant />
      <About />
      <Skills />
      <Projects projects={projects} loading={loading} />
      <Achievements />
      <AIAutomation />
      <Certificates />
      <CV />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
