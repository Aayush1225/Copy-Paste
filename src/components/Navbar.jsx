import { NavLink } from "react-router-dom"

import logo from "../assets/logo-good.png"
import { Hamburger } from "lucide-react";

export default function Navbar() {
    return (
        <div className="w-full h-16 flex items-center my-4 justify-center ">
            <div className="w-full max-w-6xl h-16 flex items-center justify-between px-4 md:px-8 py-0 rounded-2xl shadow-md bg-stone-200">


                <div className="h-full py-2 ">
                    <img src={logo} alt="logo" className="h-full object-contain" />
                </div>


                <div className="hidden md:flex gap-4 text-sm font-medium">

                    {["/", "/features", "/debug", "/support"].map((path, i) => {
                        const labels = ["Home", "Features", "Debug", "Support"];

                        return (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `px-3 py-1 rounded-full transition-all duration-300  hover:scale-105
                                      ${isActive
                                        ? "bg-black text-white"
                                        : "text-gray-700 hover:bg-black hover:text-white"
                                    }`
                                }
                            >
                                {labels[i]}
                            </NavLink>
                        );
                    })}

                </div>
                <div className="md:hidden">
            
            <button className="p-2 bg-gray-300 rounded-lg">☰</button>
           </div>
            </div>

        </div>
    );
}