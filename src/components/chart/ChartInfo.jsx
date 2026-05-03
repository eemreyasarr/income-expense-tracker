export function ChartInfo({ incomeTotal, expenseTotal }) {
    return (
        <div className="chart-info">
            <div>
                <span className="dot income-dot"></span>
                Income: <strong>{incomeTotal} CHF</strong>
            </div>

            <div>
                <span className="dot expense-dot"></span>
                Expense: <strong>{expenseTotal} CHF</strong>
            </div>
        </div>
    );
}