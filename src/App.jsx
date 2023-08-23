import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

function App() {
    return (
        <Router>
            <header>
                <Link to="/" className="site-logo">
                    #VANLIFE
                </Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans">
                    <Route index element={<Vans />} />
                    <Route path=":vanId" element={<VanDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
