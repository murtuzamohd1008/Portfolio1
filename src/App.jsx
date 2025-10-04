
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx';
import './App.css'
import { useEffect, useState } from 'react';

import Skills from './component/Skills.jsx';
import Project from './component/Project.jsx';
import Contact from './component/Contact.jsx';
function App() {

  const [isloaded,setIsLoaded]=useState(false);

  useEffect(()=>{
    setIsLoaded(true);
  },[])
 
  return (
    
    <div className={`app ${isloaded?"loaded":""}`}>
        <Navbar/>

    
     <Hero/>
   <Skills/>
   <Project/>
 <Contact/>
  
    
    </div>
 
    
  )
}

export default App
