import { TransactionItem } from "./TransactionItem";

export function TransactionList({ transactions }) {
    if (transactions.length === 0) {
        return (
            <div className="empty-box">
                <h3>No transactions yet</h3>
                <p>Add your first income or expense.</p>
            </div>
        );
    }

    return (
        <div>
            {transactions.map(transaction => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
}