import { NavLink } from "react-router-dom";

export function SideMenuItem({ label, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `side-menu-item ${isActive ? "active" : ""}`
            }
        >
            {label}
        </NavLink>
    );
}