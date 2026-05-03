import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

export function TransactionArea({ transactions }) {
    return (
        <section>
            <h2>Recent Transactions</h2>

            <AddTransaction />
            <TransactionList transactions={transactions} />
        </section>
    );
}