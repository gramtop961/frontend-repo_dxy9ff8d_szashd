import { useState, useEffect } from 'react';
import { Moon, Sun, Rocket } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-black/40 border-b border-white/10 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-400/30">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">Dev Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 rounded-lg p-2 ring-1 ring-white/10 hover:ring-cyan-400/40 transition-colors text-slate-700 dark:text-slate-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
