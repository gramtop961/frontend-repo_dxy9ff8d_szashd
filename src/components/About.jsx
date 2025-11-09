import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#0b1220] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300">
            I'm a developer who loves building fast, accessible, and visually engaging products. My focus is crafting delightful frontends backed by robust APIs.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"><Github size={18}/> GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"><Linkedin size={18}/> LinkedIn</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"><Mail size={18}/> Email</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/30 to-blue-500/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="relative rounded-2xl ring-1 ring-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
