import GlobalStyles from 'styles/GlobalStyles';
import MainLandingPage from "MainLandingPage.js";

import { HashRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import RsvpPage from "./RsvpPage";

export default function App() {
    return (
        <>
            <GlobalStyles/>
            <HashRouter base="/">
                <Routes>
                    <Route path="/" element={<MainLandingPage/>}/>
                    <Route path="/rsvp" element={<RsvpPage/>}/>
                </Routes>
            </HashRouter>
        </>
    );
}
