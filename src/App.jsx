import React from 'react'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Corousal from './Components/Corousal';
import Projects from './Components/Projects';
import Aboutme from './Components/Aboutme';
import CollaborateSection from './Components/CollaborateSection';
import Footer from './Components/Footer';
import VideoGallery from './Components/VideoGallery';


const App = () => {
  return (
    <>
    <Header/>
    <Corousal/>
    <Aboutme/>
    <Projects/>
    <VideoGallery/>
    <CollaborateSection/>
    <Footer/>
    </>
  )
}

export default App