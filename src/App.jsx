
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx';
import './App.css'
import { useEffect, useState } from 'react';

import About from './component/About.jsx';
import Project from './component/Project.jsx';
import Contact from './component/Contact.jsx';
import { ToastContainer } from 'react-toastify';
function App() {

  const [isloaded,setIsLoaded]=useState(false);

  useEffect(()=>{
    setIsLoaded(true);
  },[])
 
  return (
    
    <div className={`app ${isloaded?"loaded":""}`}>
        <Navbar/>

    
     <Hero/>
   <About/>
   <Project/>
 <Contact/>
  <ToastContainer/>
    
    </div>
 
    
  )
}

export default App
