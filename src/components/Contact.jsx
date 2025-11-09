import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const action = 'https://formspree.io/f/xwkgpqrn'; // demo endpoint; replace with your own
    fetch(action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: JSON.stringify(data) })
      .then(() => alert('Message sent!'))
      .catch(() => alert('Something went wrong.'));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0b1220] to-black text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-400">Have a project in mind? Let’s build it.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />
            </div>
            <button className="mt-5 inline-flex items-center justify-center rounded-lg bg-cyan-500 text-black font-medium px-5 py-2.5 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:brightness-110 transition">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">Let’s connect</h3>
            <p className="mt-2 text-slate-300">I’m open to freelance, full-time roles, and collaborations.</p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li><a className="hover:text-cyan-300" href="mailto:hello@example.com">hello@example.com</a></li>
              <li><a className="hover:text-cyan-300" href="https://github.com" target="_blank" rel="noreferrer">github.com/yourhandle</a></li>
              <li><a className="hover:text-cyan-300" href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/yourhandle</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
