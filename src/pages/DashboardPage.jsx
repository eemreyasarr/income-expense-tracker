import { useAppState } from "../state/useAppState";
import { SummaryArea } from "../components/summary/SummaryArea";
import { TransactionArea } from "../components/transaction/TransactionArea";
import { BudgetArea } from "../components/budget/BudgetArea";
import { GoalArea } from "../components/goal/GoalArea";

export function DashboardPage() {
    const { state } = useAppState();

    return (
        <main>
            <SummaryArea transactions={state.transactions} />

            <TransactionArea transactions={state.transactions} />

            <BudgetArea budgets={state.budgets} />

            <GoalArea goals={state.goals} />
        </main>
    );
}