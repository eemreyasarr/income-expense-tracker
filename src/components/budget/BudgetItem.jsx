import { BudgetProgress } from "./BudgetProgress";

export function BudgetItem({ budget }) {
    const percent = Math.round((budget.used / budget.limit) * 100);

    return (
        <div className="budget-item">
            <div className="row">
                <strong>{budget.name}</strong>
                <span>{percent}%</span>
            </div>

            <BudgetProgress percent={percent} />

            <p className="muted">
                {budget.used} CHF used from {budget.limit} CHF
            </p>
        </div>
    );
}