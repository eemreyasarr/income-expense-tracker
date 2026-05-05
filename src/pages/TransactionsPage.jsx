// TransactionsPage.jsx
import { PageLayout } from "../components/layout/PageLayout";
import { TransactionArea } from "../components/transaction/TransactionArea";
import { useAppState } from "../state/useAppState";

export function TransactionsPage() {
    const { state } = useAppState();

    return (
        <PageLayout>
            <TransactionArea transactions={state.transactions} />
        </PageLayout>
    );
}