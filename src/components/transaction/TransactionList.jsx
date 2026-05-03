import { TransactionItem } from "./TransactionItem";

export function TransactionList({ transactions }) {
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