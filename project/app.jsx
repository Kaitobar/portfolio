const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Dashboard />
      <Education />
      <Contact />
      <Footer />
      <PortfolioTweaks />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
