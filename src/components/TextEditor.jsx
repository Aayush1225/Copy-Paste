import useClipboard from "../hooks/useClipboard";
import { useState } from "react";
import Toolbar from "./Toolbar";

export default function TextEditor() {
    const [text, setText] = useState("");

    const { copied, copy } = useClipboard();


    return (
       <div className="bg-gradient-to-br from-white via-stone-200 to-neutral-700 min-h-screen px-4 py-6 flex flex-col items-center">
            
            <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col gap-3 mt-4">

                <Toolbar text={text} copy={copy} copied={copied} />


                <div className="bg-stone-300 rounded-2xl shadow-md hover:shadow-lg transition p-3">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Start typing..."
                        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] p-4 rounded-xl bg-stone-300 outline-none resize-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

            </div>
        </div>
    );
}