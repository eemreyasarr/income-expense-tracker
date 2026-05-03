export function ExpenseItem({ expense }) {
    return (
        <div>
            <div>
                <strong>{expense.category}</strong>
                <p>{expense.title}</p>
            </div>

            <strong>- {expense.amount} CHF</strong>
        </div>
    );
}