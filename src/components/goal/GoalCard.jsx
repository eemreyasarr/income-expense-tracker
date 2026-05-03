import { useAppState } from "../../state/useAppState";
import { GoalProgress } from "./GoalProgress";

export function GoalCard({ goal }) {
    const { state } = useAppState()
    const percent = Math.round((goal.saved / goal.target) * 100);

    return (
        <div className="goal-card">
            <div className="row">
                <h3>{goal.title}</h3>
                <strong>{percent}%</strong>
            </div>

            <GoalProgress percent={percent} />

            <p className="muted">
                {goal.saved} {state.currentCurrency} saved from {goal.target} {state.currentCurrency}
            </p>
        </div>
    );
}