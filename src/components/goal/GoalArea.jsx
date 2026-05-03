import { GoalCard } from "./GoalCard";

export function GoalArea({ goals }) {
    return (
        <section>
            <h2>Goals</h2>

            {goals.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
            ))}
        </section>
    );
}