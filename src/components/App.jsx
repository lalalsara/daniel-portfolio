import React from 'react';
// import React, { useState, useEffect } from 'react';
// import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';

// import { PortfolioProvider } from '../context/context';

// import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

// function App() {
//   const [hero, setHero] = useState({});
//   const [about, setAbout] = useState({});
//   const [projects, setProjects] = useState([]);
//   const [contact, setContact] = useState({});
//   const [footer, setFooter] = useState({});

//   useEffect(() => {
//     setHero({ ...heroData });
//     setAbout({ ...aboutData });
//     setProjects([...projectsData]);
//     setContact({ ...contactData });
//     setFooter({ ...footerData });
//   }, []);

//   return (
//     <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </PortfolioProvider>
//   );
// }

function App() {
  return (
    <div className="App" style="margin-top:200px;">
      <header className="App-header">
        <h1>
          Daniel Stenmark - Copywriter
        </h1>
        <p><a href="https://www.linkedin.com/in/daniel-stenmark-2a4903170">Reach out</a></p>
      </header>
    </div>
  );
}
export default App;
