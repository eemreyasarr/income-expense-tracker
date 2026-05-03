import { ChartFilter } from "./ChartFilter";
import { IncomeExpenseChart } from "./IncomeExpenseChart";
import { ChartInfo } from "./ChartInfo";

export function ChartArea({ transactions }) {
    const incomeTotal = transactions
        .filter(item => item.type === "income")
        .reduce((total, item) => total + item.amount, 0);

    const expenseTotal = transactions
        .filter(item => item.type === "expense")
        .reduce((total, item) => total + item.amount, 0);

    return (
        <section className="card chart-area">
            <div className="chart-header">
                <div>
                    <h2>Income & Expense</h2>
                    <p className="muted">Monthly overview</p>
                </div>

                <ChartFilter />
            </div>

            <IncomeExpenseChart
                incomeTotal={incomeTotal}
                expenseTotal={expenseTotal}
            />

            <ChartInfo
                incomeTotal={incomeTotal}
                expenseTotal={expenseTotal}
            />
        </section>
    );
}