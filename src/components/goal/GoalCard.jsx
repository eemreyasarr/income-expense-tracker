import { GoalProgress } from "./GoalProgress";

export function GoalCard({ goal }) {
    const percent = Math.round((goal.saved / goal.target) * 100);

    return (
        <div>
            <h3>{goal.title}</h3>

            <GoalProgress percent={percent} />

            <p>
                {goal.saved} CHF / {goal.target} CHF
            </p>

            <strong>{percent}%</strong>
        </div>
    );
}