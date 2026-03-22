

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextEditor from "../components/TextEditor";

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <TextEditor />
            <Footer />
        </div>
    );
}