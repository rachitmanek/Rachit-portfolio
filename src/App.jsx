import React, { lazy, Suspense, useState, useEffect } from "react";
import { Navbar, Footer } from "./components/layout";
import { Hero, About, Skills, Projects, Experience, Education, Certifications, Contact } from "./sections";
import { BackToTop } from "./components/ui";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.2 seconds (matches animation duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      
      <div className={`min-h-screen bg-background text-text-primary overflow-x-hidden ${isLoading ? 'overflow-hidden' : ''}`}>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </>
  );
};

export default App;
