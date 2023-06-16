
// For Particles.js

// import React, { useCallback, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
// import { loadFull } from "tsparticles";
import './App.css';

// For Routes
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

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

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

//   Adding the Loader

  const Loader = () => (
    // <div className="loader">
    //   <div className="spinner"></div>
    // </div>
    <div class="loader">
  <svg class="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="hsl(193, 90%, 55%)" />
        <stop offset="100%" stop-color="hsl(223, 90%, 55%)" />
      </linearGradient>
    </defs>
    <circle class="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0, 10%, 10%, 0.1)" stroke-width="16" stroke-linecap="round" />
    <path class="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="44 1111" stroke-dashoffset="10" />
  </svg>
</div>
  );

function App() {

    const [isLoading, setIsLoading] = useState(true);


    // const particlesInit = useCallback(main => {
    //     loadFull(main);
    // }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
      }

    return (
        <BrowserRouter>
         <ScrollToTop />
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
