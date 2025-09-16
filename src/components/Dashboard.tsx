import { useEffect, useState } from 'react';
import LinkCard from './LinkCard'
import { type LinkDoc } from '@/lib/utils';
import { getLink } from '@/lib/utils'
import { ModeToggle } from './Mode-toggle';
import { Bookmark } from 'lucide-react';

const Dashboard = () => {
  const [links, setLinks] = useState<LinkDoc[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getLink();
      setLinks(data);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#44403c] text-white text-base">
      {/* Header */}
      <header className="text-xl sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => (window.location.href = '/')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg grid place-items-center">
              <Bookmark className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-wide">Brainly</span>
          </div>

          <nav className="flex items-center gap-4">
            <ModeToggle />
            <a
              href="/"
              className="text-white/80 hover:text-white underline-offset-4 hover:underline"
            >
              Back to Home
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl py-8 px-4">
        <h1 className="mb-6 border-b border-white/10 pb-2 text-xl font-semibold tracking-wide">
          My Links
        </h1>

        <div className="mb-8 flex justify-center">
          <LinkCard />
        </div>

        {links.length === 0 ? (
          <div className="rounded-lg border border-dashed border-white/15 bg-white/5 px-4 py-10 text-center text-white/80">
            No links yet. Add your first link to get started.
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-white/10 bg-white/5 px-4 py-3 shadow-sm transition-colors hover:bg-white/10"
                  title={l.link}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate">{l.link}</span>
                    <span className="opacity-60 transition group-hover:opacity-100">↗</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Dashboard;