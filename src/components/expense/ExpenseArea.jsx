import { ExpenseList } from "./ExpenseList";

export function ExpenseArea({ transactions }) {
    const expenses = transactions.filter(item => item.type === "expense");

    return (
        <section className="card">
            <h2>Expenses</h2>

            <ExpenseList expenses={expenses} />
        </section>
    );
}