import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Outcomes from "./components/Outcomes";
import FeaturedWork from "./components/FeaturedWork";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="portfolio">
      <Nav />
      <main>
        <HeroSection />
        <Outcomes />
        <FeaturedWork />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
