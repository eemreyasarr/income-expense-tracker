import { PageLayout } from "../components/layout/PageLayout";
import { SummaryArea } from "../components/summary/SummaryArea";
import { ChartArea } from "../components/chart/ChartArea";
import { ExpenseArea } from "../components/expense/ExpenseArea";
import { TransactionArea } from "../components/transaction/TransactionArea";
import { BudgetArea } from "../components/budget/BudgetArea";
import { GoalArea } from "../components/goal/GoalArea";
import { useAppState } from "../state/useAppState";

export function DashboardPage() {
    const { state } = useAppState();

    return (
        <PageLayout>
            <SummaryArea transactions={state.transactions} />

            <div className="dashboard-grid">
                <div className="left-column">
                    <ChartArea transactions={state.transactions} />
                    <TransactionArea transactions={state.transactions} />
                </div>

                <div className="right-column">
                    <ExpenseArea transactions={state.transactions} />
                    <BudgetArea budgets={state.budgets} />
                    <GoalArea goals={state.goals} />
                </div>
            </div>
        </PageLayout>
    );
}