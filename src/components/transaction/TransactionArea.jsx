import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { TransactionFilter } from "./TransactionFilter";
import { useAppState } from "../../state/useAppState";

export function TransactionArea({ transactions }) {
    const { state } = useAppState();

    const selectedType = state.filters.selectedType;
    const selectedCategory = state.filters.selectedCategory;

    const filteredTransactions = transactions.filter(item => {
        const typeMatch =
            selectedType === "all" || item.type === selectedType;

        const categoryMatch =
            selectedCategory === "all" || item.category === selectedCategory;

        return typeMatch && categoryMatch;
    });

    return (
        <section className="card transaction-area">
            <h2>Recent Transactions</h2>

            <AddTransaction />

            <TransactionFilter />

            <TransactionList transactions={filteredTransactions} />
        </section>
    );
}