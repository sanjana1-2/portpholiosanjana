import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElegantCursor from './components/ElegantCursor';
import HeroElegant from './components/HeroElegant';
import Navbar from './components/Navbar';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIAutomation from './components/AIAutomation';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import CV from './components/CV';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import './elegant.css';
import './App.css';

// API URL configuration
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-backend.onrender.com'
  : 'http://localhost:5000';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useScrollAnimations();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <ElegantCursor />
      <Navbar />
      <HeroElegant />
      <About />
      <Achievements />
      <Skills />
      <Projects projects={projects} loading={loading} />
      <AIAutomation />
      <Certificates />
      <Contact />
      <CV />
    </div>
  );
}

export default App;
