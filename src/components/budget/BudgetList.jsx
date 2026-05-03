import { BudgetItem } from "./BudgetItem";

export function BudgetList({ budgets }) {
    return (
        <div>
            {budgets.map(budget => (
                <BudgetItem key={budget.id} budget={budget} />
            ))}
        </div>
    );
}