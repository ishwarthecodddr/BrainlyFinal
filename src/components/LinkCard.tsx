import { useState } from "react"
import { Button } from "./ui/button"
import { addLink } from "@/lib/utils";

const LinkCard = () => {
    const [link, setLink] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addLink(link);
        setShowModal(false);
        setLink("");
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                {!showModal && (
                    <Button className="bg-purple-500" onClick={() => setShowModal(true)}>
                        Add Link
                    </Button>
                )}

                {showModal && (
                    <>
                        {/* Overlay: close on outside click */}
                        <div
                            className="fixed inset-0 z-40 bg-black/50"
                            onMouseDown={() => setShowModal(false)}
                        />

                        {/* Centered modal */}
                        <div className="flex flex-col fixed inset-0 z-50 items-center justify-center">
                            <div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="add-link-title"
                                onMouseDown={(e) => e.stopPropagation()}
                                className="w-[min(90vw,28rem)] rounded-lg bg-slate-300/70 p-4 shadow-lg dark:bg-neutral-900"
                            >
                                <h2 id="add-link-title" className="mb-3 text-lg font-semibold">
                                    Add a link
                                </h2>

                                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                    <input
                                        type="url"
                                        placeholder="Enter the link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        required
                                        autoFocus
                                        className="text-sm p-2 m-2 border-b-2 shadow-md border-red-200 rounded-md bg-white text-black"
                                    />
                                    <Button type="submit" className="bg-gradient-to-r from-slate-300 to-slate-700">
                                        Add Link
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LinkCard