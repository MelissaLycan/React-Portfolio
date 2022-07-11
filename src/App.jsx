import React from 'react'
import Header from './components/Header/Header.jsx'
// import NavTabs from './components/Navigation/Navigation.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Resume from './components/Pages/Resume'
import NavTabs from './components/Navigation/Navigation.jsx'


export const App = () => {
  return (
    <>
        <Header />
        <NavTabs />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
    </>
  );
}


export default App;
