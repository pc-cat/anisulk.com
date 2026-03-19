import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col selection:bg-purple-900 selection:text-white pb-32">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Marquee text="projects" />
      <Projects />
      <Footer />
    </main>
  );
}