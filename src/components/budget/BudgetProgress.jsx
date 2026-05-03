export function BudgetProgress({ percent }) {
    return (
        <div>
            <div style={{ width: `${percent}%` }} />
        </div>
    );
}