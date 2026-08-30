import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';

function SocialButton({ link }) {
  const Icon = link.icon;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-5px_rgba(245,185,66,0.25)] active:scale-[0.99]"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 ease-out group-hover/link:translate-x-full" />
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-amber-200/90 ring-1 ring-white/10 transition-colors duration-300 group-hover/link:bg-amber-200/10 group-hover/link:text-amber-100">
        <Icon className="h-5 w-5" size={20} />
      </span>
      <span className="flex-1 text-left text-[15px] font-medium tracking-wide text-zinc-200 transition-colors duration-300 group-hover/link:text-white">
        {link.name}
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-amber-200/80" />
    </a>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 top-1/4 h-[28rem] w-[28rem] animate-blob rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/3 h-[26rem] w-[26rem] animate-blob animation-delay-2000 rounded-full bg-rose-500/8 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-blob animation-delay-4000 rounded-full bg-orange-500/8 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.6)_100%)]" />
    </div>
  );
}

function App() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#08080a] px-5 py-10">
      <BackgroundGlow />

      <main className="relative z-10 w-full max-w-[450px]">
        {/* Social Links */}
        <nav className="mt-10 flex flex-col gap-3">
          {socialLinks.map((link) => (
            <SocialButton key={link.name} link={link} />
          ))}
        </nav>
      </main>
    </div>
  );
}

export default App;
