import { useAppState } from "../../state/useAppState";
import { BudgetList } from "./BudgetList";

export function BudgetArea({ budgets }) {
    const { state } = useAppState()

    return (
        <section className="card">
            <h2>Budget</h2>

            <BudgetList budgets={budgets} currency={state.currentCurrency} />
        </section>
    );
}