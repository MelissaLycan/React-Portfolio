import React from 'react'
import Header from './components/Header/Header.jsx'
// import NavTabs from './components/Navigation/Navigation.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Testimonials from './components/Testimonials/Testimonials'
import Resume from './components/Pages/Resume'


export const App = () => {
  return (
    <>
        <Header />
        
        <About />

        <Experience />

        <Resume />

        <Projects />

        <Testimonials />

        <Contact />

        <Footer />
    </>
  );
}


export default App;
