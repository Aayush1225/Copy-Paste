import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from "./pages/Home";
import  Features  from "./pages/Features";
import  Debug  from "./pages/Debug";
import  Support  from "./pages/Support";


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/features" element={<Features/>}></Route>
            <Route path="/debug" element={<Debug/>}></Route>
            <Route path="/support" element={<Support/>}></Route>
        </Routes>
        
        </BrowserRouter>
    )
}