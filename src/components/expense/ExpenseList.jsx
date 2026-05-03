import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList({ expenses }) {
    if (expenses.length === 0) {
        return (
            <div className="empty-box">
                <h3>No expenses yet</h3>
                <p>Your expenses will appear here.</p>
            </div>
        );
    }

    return (
        <div>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </div>
    );
}