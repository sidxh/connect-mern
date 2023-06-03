
// For Particles.js

import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

// For Routes
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// For Importing Pages
import Landing from './pages/Landing';
import Vision from "./pages/Vision"
import Explore from "./pages/Explore"
import Opportunities from "./pages/Opportunities"
import ReachOut from "./pages/ReachOut"
import WebTech from './pages/WebTech';
import NonTech from './pages/NonTech';
import Core from './pages/Core';
import Media from './pages/Media';
import Misc from './pages/Misc';
import Header from "./components/Header"
import SkillsPage from './pages/SkillsPage';



function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path='/' element={<Header />}>
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/explore" element={<Explore />}>
                        <Route index element={<WebTech />} />
                        <Route path="nontech" element={<NonTech />} />
                        <Route path="core" element={<Core />} />
                        <Route path="media" element={<Media />} />
                        <Route path="misc" element={<Misc />} />
                    </Route>

                        <Route path="/explore/:category/:skill" element={<SkillsPage />}/>

                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/reach-out" element={<ReachOut />} />
            </Route>
        </Routes>
    </BrowserRouter>       

    );
}

export default App;
