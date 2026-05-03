export function ChartInfo({ incomeTotal, expenseTotal }) {
    return (
        <div>
            <p>Income: {incomeTotal} CHF</p>
            <p>Expense: {expenseTotal} CHF</p>
        </div>
    );
}