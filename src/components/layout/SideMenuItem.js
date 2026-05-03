export function SideMenuItem({ label, active }) {
    return (
        <button className={`side-menu-item ${active ? "active" : ""}`}>
            {label}
        </button>
    );
}