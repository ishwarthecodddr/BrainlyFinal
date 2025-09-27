import { ModeToggle } from "./Mode-toggle"
import { Bookmark, Youtube, Twitter, Linkedin } from "lucide-react"

const Landing = () => {
    return (
        <>
            {/* Top nav */}
            <header className="sticky top-0 z-10 border-b border-white/10 bg-black/30 backdrop-blur">
                <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-white">
                    <div className="flex items-center gap-3 select-none">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg grid place-items-center">
                            <Bookmark className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold tracking-wide">Brainly</span>
                    </div>
                    <nav className="hidden sm:flex items-center gap-8 text-sm text-white/80">
                        <a className="hover:text-white" href="#">Home</a>
                        <a className="hover:text-white" href="#features">Features</a>
                        <a className="hover:text-white" href="/dashboard">Dashboard</a>
                    </nav>
                    <ModeToggle />
                </div>
            </header>

            {/* Hero */}
            <section className="relative isolate text-white">
                {/* Background: base gradient glow */}
                <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#1f1635_0%,#0e1121_100%)]" />
                {/* Background: subtle grid with radial mask */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10
                     [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
                     [background-size:28px_28px]
                     [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_75%)]"
                />
                {/* Background: top glow */}
                <div className="absolute inset-x-0 -top-40 -z-10 h-80
                        bg-[radial-gradient(600px_240px_at_50%_0px,rgba(168,85,247,0.35),transparent_70%)]" />

                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 min-h-[calc(100vh-3.5rem)] grid place-items-center text-center">
                    <div>
                        <div className="mb-6 flex items-center justify-center gap-4 text-white/70">
                            <Youtube className="w-6 h-6" />
                            <Twitter className="w-6 h-6" />
                            <Linkedin className="w-6 h-6" />
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                            Collect, Organize,{" "}
                            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
                                Revisit.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl rounded-md  px-4 py-3 text-lg text-white/90 backdrop-blur">
                            Your favorite content from YouTube, Twitter, and LinkedIn—saved in one place.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-4">
                            <a
                                href="/dashboard"
                                className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
                            >
                                Try Brainly Free
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing