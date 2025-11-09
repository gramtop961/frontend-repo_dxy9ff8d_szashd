import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Dashboard',
    desc: 'Analytics dashboard with charts, auth, and billing.',
    img: 'https://images.unsplash.com/photo-1551281044-8d8f1b6c5e5b?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'Headless shop with product search and checkout.',
    img: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Realtime Chat',
    desc: 'Socket based chat with rooms and presence.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0b1220] text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-400">A selection of work showcasing product thinking and engineering.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.08] transition will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.github} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"><Github size={16}/> Code</a>
                  <a href={p.demo} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"><Link size={16}/> Live</a>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-cyan-400/10 to-blue-500/10 rounded-xl transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
