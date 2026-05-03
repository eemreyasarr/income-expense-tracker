import { useAppState } from "../../state/useAppState";
import { DELETE_TRANSACTION } from "../../state/appActions";

export function TransactionItem({ transaction }) {
    const { state, dispatch } = useAppState();

    const isIncome = transaction.type === "income";

    function handleDelete() {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: transaction.id
        });
    }

    return (
        <div className="transaction-item">
            <div>
                <strong>{transaction.title}</strong>
                <p>{transaction.category}</p>
            </div>

            <div className="transaction-right">
                <strong className={isIncome ? "income-text" : "expense-text"}>
                    {isIncome ? "+" : "-"} {transaction.amount} {state.currentCurrency}
                </strong>
                <p>{transaction.date}</p>
            </div>

            <button className="delete-button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}