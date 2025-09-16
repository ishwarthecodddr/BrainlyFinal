import { ModeToggle } from "./Mode-toggle"
import { Bookmark } from 'lucide-react'
const Landing = () => {
    return (
        <>
            <div className="text-xl  h-14 flex justify-center items-center gap-10">
               <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
                <span className="mr-200">Brainly</span>
                <nav className="flex gap-10">
                    <a className="hover:cursor-pointer hover:text-blue-400">
                        Home
                    </a>
                    <a className="hover:cursor-pointer hover:text-blue-400">
                        Features
                    </a>
                    <a className="hover:cursor-pointer hover:text-blue-400" onClick={() => window.location.href = '/dashboard'}>
                        Dashboard
                    </a>
                </nav>
                <ModeToggle />
            </div >
            <div className="text-5xl font-bold flex h-screen justify-center items-center bg-purple-300/50 bg-[radial-gradient(black,transparent_1px)]
                      [background-size:16px_16px]">
                <h1 className="rounded-md ">
                    Collect, Organize, <span className="bg-gradient-to-r text-transparent bg-clip-text from-pink-300 to-pink-500">Revisit</span>
                </h1>
            </div>
        </>)
}

export default Landing