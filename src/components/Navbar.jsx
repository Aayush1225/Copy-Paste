import { NavLink } from "react-router-dom"

import logo from "../assets/logo-good.png"

export default function Navbar() {
    return (
        <div className="w-full h-16 flex items-center my-4 justify-center ">
            <div className="w-5/6  h-full flex items-center justify-between px-8 py-0 rounded-2xl shadow-md bg-stone-200">


                <div className="h-full py-2 ">
                    <img src={logo} alt="logo" className="h-full " />
                </div>


                <div className="flex gap-4 text-xs font-medium">

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
            </div>

        </div>
    );
}