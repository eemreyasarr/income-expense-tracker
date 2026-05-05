import { SideMenuItem } from "./SideMenuItem";

export function SideMenu() {
    return (
        <aside className="side-menu">
            <div className="logo-box">
                <div className="logo-icon">M</div>
                <div>
                    <h2>MoneyTrack</h2>
                    <p>Finance App</p>
                </div>
            </div>

            <nav>
                <SideMenuItem label="Dashboard" to="/" />
                <SideMenuItem label="Transactions" to="/transactions" />
                <SideMenuItem label="Budgets" to="/budgets" />
                <SideMenuItem label="Goals" to="/goals" />
            </nav>

            <div className="side-card">
                <strong>Smart Budget</strong>
                <p>Keep your spending under control.</p>
            </div>
        </aside>
    );
}