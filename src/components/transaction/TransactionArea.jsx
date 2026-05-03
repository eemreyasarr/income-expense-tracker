import { TransactionList } from "./TransactionList";

export function TransactionArea({ transactions }) {
    return (
        <section>
            <h2>Recent Transactions</h2>

            <TransactionList transactions={transactions} />
        </section>
    );
}