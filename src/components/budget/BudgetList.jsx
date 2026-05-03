import { BudgetItem } from "./BudgetItem";

export function BudgetList({ budgets, currency }) {
    return (
        <div>
            {budgets.map(budget => (
                <BudgetItem key={budget.id} budget={budget} currency={currency} />
            ))}
        </div>
    );
}