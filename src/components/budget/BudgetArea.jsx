import { BudgetList } from "./BudgetList";

export function BudgetArea({ budgets }) {
    return (
        <section>
            <h2>Budget</h2>

            <BudgetList budgets={budgets} />
        </section>
    );
}