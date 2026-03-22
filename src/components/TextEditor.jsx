import useClipboard from "../hooks/useClipboard";
import { useState } from "react";
import Toolbar from "./Toolbar";

export default function TextEditor() {
    const [text, setText] = useState("");

    const { copied, copy } = useClipboard();


    return (
        <div className="bg-linear-to-br from-white via-stone-700 to-neutral-700  min-h-screen  flex items-center justify-center px-4">

            
            <div className="w-full max-w-10/12">

                <Toolbar text={text} copy={copy} copied={copied} />


                <div className="bg-stone-300 rounded-2xl shadow-lg p-3">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Start typing..."
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] p-4 rounded-xl bg-stone-300 outline-none resize-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

            </div>
        </div>
    );
}