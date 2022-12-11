import React, {FC} from 'react';
import './App.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PageOne from "./pages/PageOne";
import SecondPage from "./pages/SecondPage";

const Content: FC = () => {

    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main page</Link>
                    </li>
                    <li>
                        <Link to="/one">Page one</Link>
                    </li>
                    <li>
                        <Link to="/second">Second page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/one" element={<PageOne />} />
                <Route path="/second" element={<SecondPage />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Content />
        </BrowserRouter>
    );
}

export default App;
