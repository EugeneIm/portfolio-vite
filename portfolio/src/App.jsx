import React from "react";
import Typewriter from "typewriter-effect";
import AboutMe from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Experience from "./Components/Experience.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <>
      <div>
        <div>
          <Typewriter
            options={{
              strings: [
                "Welcome to My Portfolio",
                "Made with ReactJS",
                "Fueled by caffeine and ADHD",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <AboutMe />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
