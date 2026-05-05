import { SummaryArea } from "../components/summary/SummaryArea";
import { ChartArea } from "../components/chart/ChartArea";
import { ExpenseArea } from "../components/expense/ExpenseArea";
import { TransactionArea } from "../components/transaction/TransactionArea";
import { BudgetArea } from "../components/budget/BudgetArea";
import { GoalArea } from "../components/goal/GoalArea";
import { useAppState } from "../state/useAppState";

export function DashboardPage() {
    const { state } = useAppState();

    const filteredTransactions = state.transactions.filter(transaction =>
        transaction.date.startsWith(state.filters.selectedMonth)
    );

    return (
        <>
            <SummaryArea transactions={filteredTransactions} />

            <div className="dashboard-grid">
                <div className="left-column">
                    <ChartArea transactions={filteredTransactions} />
                    <TransactionArea transactions={filteredTransactions} />
                </div>

                <div className="right-column">
                    <ExpenseArea transactions={filteredTransactions} />
                    <BudgetArea budgets={state.budgets} />
                    <GoalArea goals={state.goals} />
                </div>
            </div>
        </>
    );
}