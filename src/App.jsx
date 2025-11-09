import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name — Built with ❤️ using React + Tailwind
        </div>
      </footer>
    </div>
  );
}

export default App;
