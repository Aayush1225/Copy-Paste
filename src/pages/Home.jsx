
import { publicIpv4 } from 'public-ip';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextEditor from "../components/editors/TextEditor";
import { useContext, useEffect, useState } from "react";
import { onboardingRoom } from "../api/room";
import { DarkContext } from '../App';


export default function Home() {

    const {darkMode} = useContext(DarkContext);

    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        const OnBoarding = async () => {
            try {
                const ipAddress = await publicIpv4()
                const response = await onboardingRoom(ipAddress);
                setText(response.data.data);

            } catch (err) {
                console.log(err);
                setError("Failed to Connect to server")
            } finally {
                setLoading(false);
            }
        };

        OnBoarding();
    }, []);



    if (loading) {
        return (
            <div className={`min-h-screen flex justify-center items-center ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                <span className="animate-pulse text-gray-500">Loading...</span>
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    //             <h1 className="text-xl font-semibold text-red-500 mb-2">
    //                 ⚠️ Something went wrong
    //             </h1>
    //             <p className="text-gray-600">{error}</p>

    //             <button
    //                 onClick={() => window.location.reload()}
    //                 className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
    //             >
    //                 Retry
    //             </button>
    //         </div>
    //     );
    // }
    return (
        <div className="min-h-screen flex flex-col dark:bg-gray-900">
            <Navbar />
            <main className="grow">
                <TextEditor textContent={text?.textContent?.content} roomId={text?.id} />
            </main>
            <Footer />
        </div>
    );
}