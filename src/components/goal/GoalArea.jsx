import { GoalCard } from "./GoalCard";

export function GoalArea({ goals }) {
    return (
        <section className="card">
            <h2>Goals</h2>

            {goals.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
            ))}
        </section>
    );
}