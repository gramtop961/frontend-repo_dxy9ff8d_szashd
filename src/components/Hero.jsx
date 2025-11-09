import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <p className="mb-3 text-cyan-300/90 tracking-widest uppercase text-xs">Available for freelance</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">Your Name</span>
          </h1>
          <div className="mt-4 text-lg sm:text-xl text-slate-200">
            <Typing />
          </div>
          <p className="mt-4 text-slate-300 max-w-xl">
            Full Stack Developer crafting modern web apps with React, Next.js, and TypeScript. I build delightful user experiences with scalable backends.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 text-black font-medium px-5 py-2.5 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:brightness-110 transition">Hire Me</a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white font-medium px-5 py-2.5 hover:border-cyan-400/60 hover:text-cyan-300 transition">View Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Typing() {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor'];
  return (
    <motion.span
      key="typing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="font-medium"
    >
      {roles[0]}
    </motion.span>
  );
}
