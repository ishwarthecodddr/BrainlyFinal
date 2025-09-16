import { useEffect, useState } from 'react';
import LinkCard from './LinkCard'
import { addLink, type LinkDoc } from '@/lib/utils';
import { getLink } from '@/lib/utils'
import { ModeToggle } from './Mode-toggle';

const Dashboard = () => {
    const [links, setLinks] = useState<LinkDoc[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getLink();
            setLinks(data);
        })();
    }, [])

    return (
        <div className='min-h-screen bg-[#44403c] text-white font-mono'>
            {/* Header */}
            <div className='sticky h-14 top-0 z-10 bg-black flex justify-between items-center px-8 py-4'>
                <nav className="text-lg font-bold hover:cursor-pointer" onClick={()=>window.location.href='/'}>Brainly</nav>
                <div className='flex gap-10 items-center'>

                    <ModeToggle />
                    <span
                        className='hover:underline hover:text-blue-400 cursor-pointer'
                        onClick={() => window.location.href = "/"}
                    >
                        Back to Home
                    </span>
                </div>
            </div>
            {/* Content */}
            <div className="max-w-2xl mx-auto py-8 px-4">
                <div className="mb-6 text-xl font-semibold tracking-wide">
                    MY LINKS
                </div>
                <div className="mb-8 flex justify-center">
                    <LinkCard />
                </div>
                <div>
                    {links.map((l) => (
                        <div key={l.id} className="mb-3 p-3 hover:text-blue-200 hover:cursor-pointer rounded bg-black/30" onClick={() => window.location.href = `${l.link}`}>
                            {l.link}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard