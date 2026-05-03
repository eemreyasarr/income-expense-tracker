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
        <section>
            <div>
                <h2>Income & Expense</h2>
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