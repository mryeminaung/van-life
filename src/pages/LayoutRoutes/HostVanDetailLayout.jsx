import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const HostVanDetailLayout = () => {
    const { hostVanId } = useParams();
    const [hostVan, setHostVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${hostVanId}`)
            .then((res) => res.json())
            .then((data) => setHostVan(data.vans[0]));
    }, []);

    return (
        <>
            {/* relative to current path, so it will go back to the previous route, in this not the route i want to go back */}
            {/* <Link to=".." relative="path" className="back-button">
                &larr; Back to all vans
            </Link> */}

            <Link to="/host/vans" className="back-button">
                &larr; Back to all vans
            </Link>

            {hostVan ? (
                <section>
                    <div className="host-van-detail-layout-container">
                        <div className="host-van-detail">
                            <img src={hostVan.imageUrl} />
                            <div className="host-van-detail-info-text">
                                <i
                                    className={`van-type van-type-${hostVan.type}`}
                                >
                                    {hostVan.type}
                                </i>
                                <h3>{hostVan.name}</h3>
                                <h4>${hostVan.price}/day</h4>
                            </div>
                        </div>
                        {/* nested navbar for /host/van/HostVanDetailLayout */}
                        <nav className="host-van-detail-nav">
                            <NavLink
                                to="."
                                end
                                className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                }
                            >
                                Details
                            </NavLink>
                            <NavLink
                                to="pricing"
                                className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                }
                            >
                                Pricing
                            </NavLink>
                            <NavLink
                                to="photos"
                                className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                }
                            >
                                Photos
                            </NavLink>
                        </nav>
                        {/* child routes can use this context props by calling useOutletContext */}
                        <Outlet context={{ currentVan: hostVan }} />
                    </div>
                </section>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default HostVanDetailLayout;
