// TransactionsPage.jsx
import { TransactionArea } from "../components/transaction/TransactionArea";
import { useAppState } from "../state/useAppState";

export function TransactionsPage() {
    const { state } = useAppState();

    return (
        <TransactionArea transactions={state.transactions} />
    );
}