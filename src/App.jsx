import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout routes
import NavbarLayout from "./pages/LayoutRoutes/NavbarLayout";
import HostLayout from "./pages/LayoutRoutes/HostLayout";
import HostVanDetailLayout from "./pages/LayoutRoutes/HostVanDetailLayout";

import Home from "./components/Home";
import About from "./components/About";

// vans route
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

// host route
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import Reviews from "./pages/Host/Reviews";

// host van detail route
import HostVanInfo from "./pages/Host/HostVansDetails/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVansDetails/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVansDetails/HostVanPhotos";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NavbarLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:vanId" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />

                        <Route
                            path="vans/:hostVanId"
                            element={<HostVanDetailLayout />}
                        >
                            <Route index element={<HostVanInfo />} />
                            <Route
                                path="pricing"
                                element={<HostVanPricing />}
                            />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>

                    {/* if there is no shared-layout, don't need to use nested routes */}
                    {/* <Route path="vans">
                        <Route index element={<Vans />} />
                        <Route path=":vanId" element={<VanDetail />} />
                    </Route> */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
