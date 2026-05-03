export function GoalProgress({ percent }) {
    return (
        <div className="progress">
            <div
                className="progress-fill"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}