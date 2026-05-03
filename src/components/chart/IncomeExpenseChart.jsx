export function IncomeExpenseChart({ incomeTotal, expenseTotal }) {
    const maxValue = Math.max(incomeTotal, expenseTotal, 1);

    const incomeHeight = Math.max((incomeTotal / maxValue) * 150, 16);
    const expenseHeight = Math.max((expenseTotal / maxValue) * 150, 16);

    return (
        <div className="bar-chart">
            <div className="bar-item">
                <div className="bar-track">
                    <div
                        className="bar-fill income-bar"
                        style={{ height: `${incomeHeight}px` }}
                    />
                </div>
                <span>Income</span>
            </div>

            <div className="bar-item">
                <div className="bar-track">
                    <div
                        className="bar-fill expense-bar"
                        style={{ height: `${expenseHeight}px` }}
                    />
                </div>
                <span>Expense</span>
            </div>
        </div>
    );
}