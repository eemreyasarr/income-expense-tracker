import { useAppState } from "../../state/useAppState";
import { RESET_APP } from "../../state/appActions";
import { SET_MONTH } from "../../state/appActions";

export function TopBar() {
    const { state, dispatch } = useAppState();

    function handleReset() {
        if (!window.confirm("Are you sure? This will delete all data.")) return;

        dispatch({ type: RESET_APP });

        localStorage.removeItem("income-expense-state");
    }

    function handleMonthChange(e) {
        dispatch({
            type: SET_MONTH,
            payload: e.target.value,
        });
    }

    return (
        <header className="top-bar">
            <div>
                <h1>Dashboard</h1>
                <p>Track your income and expenses</p>
            </div>

            <div className="top-actions">
                <input
                    type="month"
                    value={state.filters.selectedMonth}
                    onChange={handleMonthChange}
                />

                <button className="light-button">Export</button>
                <button>Add New</button>

                <button onClick={handleReset} className="danger-button">
                    Reset
                </button>
            </div>
        </header>
    );
}