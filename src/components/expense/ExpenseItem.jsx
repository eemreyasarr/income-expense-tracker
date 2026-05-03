import { useAppState } from "../../state/useAppState";

export function ExpenseItem({ expense }) {
    const { state } = useAppState()

    return (
        <div className="small-item">
            <div className="item-icon">
                {expense.category.charAt(0)}
            </div>

            <div className="item-content">
                <strong>{expense.category}</strong>
                <p>{expense.title}</p>
            </div>

            <strong className="expense-text">
                - {expense.amount} {state.currentCurrency}
            </strong>
        </div>
    );
}