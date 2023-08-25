import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (    
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default HostLayout;
