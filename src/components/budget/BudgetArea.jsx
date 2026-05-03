import { BudgetList } from "./BudgetList";

export function BudgetArea({ budgets }) {
    return (
        <section className="card">
            <h2>Budget</h2>

            <BudgetList budgets={budgets} />
        </section>
    );
}