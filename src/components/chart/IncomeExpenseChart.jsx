export function IncomeExpenseChart({ incomeTotal, expenseTotal }) {
    const maxValue = Math.max(incomeTotal, expenseTotal, 1);

    const incomeHeight = (incomeTotal / maxValue) * 100;
    const expenseHeight = (expenseTotal / maxValue) * 100;

    return (
        <div style={{ display: "flex", gap: "24px", height: "180px", alignItems: "end" }}>
            <div>
                <div
                    style={{
                        height: `${incomeHeight}px`,
                        width: "28px",
                        background: "#4ade80",
                        borderRadius: "12px",
                    }}
                />
                <p>Income</p>
            </div>

            <div>
                <div
                    style={{
                        height: `${expenseHeight}px`,
                        width: "28px",
                        background: "#fb7185",
                        borderRadius: "12px",
                    }}
                />
                <p>Expense</p>
            </div>
        </div>
    );
}