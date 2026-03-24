

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextEditor from "../components/TextEditor";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow"> <TextEditor />  </main>
            
            <Footer />
        </div>
    );
}