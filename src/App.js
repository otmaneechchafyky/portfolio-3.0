import Header from "./components/Header";
import Hero from "./routes/Hero";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-cyan-950">
      <Header />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Work />
        <Contact />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  );
};

export default App;
