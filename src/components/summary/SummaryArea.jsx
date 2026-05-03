import { useAppState } from "../../state/useAppState";
import { SummaryCard } from "./SummaryCard";

export function SummaryArea({ transactions }) {
    const { state } = useAppState();

    const totalIncome = transactions
        .filter(item => item.type === "income")
        .reduce((total, item) => total + item.amount, 0);

    const totalExpense = transactions
        .filter(item => item.type === "expense")
        .reduce((total, item) => total + item.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <section className="grid-3">
            <SummaryCard title="Income" amount={totalIncome} type="income" currency={state.currentCurrency} />
            <SummaryCard title="Expense" amount={totalExpense} type="expense" currency={state.currentCurrency} />
            <SummaryCard title="Balance" amount={balance} type="balance" currency={state.currentCurrency} />
        </section>
    );
}