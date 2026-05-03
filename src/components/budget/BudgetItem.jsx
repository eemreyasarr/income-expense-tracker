import { BudgetProgress } from "./BudgetProgress";

export function BudgetItem({ budget }) {
    const percent = Math.round((budget.used / budget.limit) * 100);

    return (
        <div>
            <div>
                <strong>{budget.name}</strong>
                <span>{percent}%</span>
            </div>

            <BudgetProgress percent={percent} />

            <p>
                {budget.used} CHF / {budget.limit} CHF
            </p>
        </div>
    );
}