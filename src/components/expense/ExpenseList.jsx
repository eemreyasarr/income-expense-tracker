import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList({ expenses }) {
    return (
        <div>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </div>
    );
}