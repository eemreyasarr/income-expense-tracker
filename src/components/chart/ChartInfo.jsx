import { useAppState } from "../../state/useAppState";

export function ChartInfo({ incomeTotal, expenseTotal }) {
    const { state } = useAppState()

    return (
        <div className="chart-info">
            <div>
                <span className="dot income-dot"></span>
                Income: <strong>{incomeTotal} {state.currentCurrency}</strong>
            </div>

            <div>
                <span className="dot expense-dot"></span>
                Expense: <strong>{expenseTotal} {state.currentCurrency}</strong>
            </div>
        </div>
    );
}