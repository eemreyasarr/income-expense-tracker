export function TransactionItem({ transaction }) {
const isIncome = transaction.type === "income";

return (
<div>
    <div>
        <strong>{transaction.title}</strong>
        <p>{transaction.category}</p>
    </div>

    <div>
        <strong>
            {isIncome ? "+" : "-"} {transaction.amount} CHF
        </strong>
        <p>{transaction.date}</p>
    </div>
</div>
);
}