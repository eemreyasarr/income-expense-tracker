export function GoalProgress({ percent }) {
    return (
        <div>
            <div style={{ width: `${percent}%` }} />
        </div>
    );
}