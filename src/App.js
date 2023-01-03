import GlobalStyles from 'styles/GlobalStyles';
import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <>
            <GlobalStyles/>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLandingPage/>}/>
                </Routes>
            </Router>
        </>
    );
}
