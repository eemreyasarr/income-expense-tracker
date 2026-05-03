import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { TransactionFilter } from "./TransactionFilter";
import { useAppState } from "../../state/useAppState";

export function TransactionArea({ transactions }) {
    const { state } = useAppState();

    const selectedType = state.filters.selectedType;

    const filteredTransactions =
        selectedType === "all"
            ? transactions
            : transactions.filter(item => item.type === selectedType);

    return (
        <section className="card transaction-area">
            <h2>Recent Transactions</h2>

            <AddTransaction />

            <TransactionFilter />

            <TransactionList transactions={filteredTransactions} />
        </section>
    );
}