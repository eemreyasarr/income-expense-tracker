import { SummaryCard } from "./SummaryCard";

export function SummaryArea({ transactions }) {
    const totalIncome = transactions
        .filter(item => item.type === "income")
        .reduce((total, item) => total + item.amount, 0);

    const totalExpense = transactions
        .filter(item => item.type === "expense")
        .reduce((total, item) => total + item.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <section>
            <SummaryCard title="Income" amount={totalIncome} />
            <SummaryCard title="Expense" amount={totalExpense} />
            <SummaryCard title="Balance" amount={balance} />
        </section>
    );
}