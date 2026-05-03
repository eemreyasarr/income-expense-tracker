export function TopBar() {
    return (
        <header className="top-bar">
            <div>
                <h1>Dashboard</h1>
                <p>Track your income and expenses</p>
            </div>

            <div className="top-actions">
                <button className="light-button">Export</button>
                <button>Add New</button>
            </div>
        </header>
    );
}