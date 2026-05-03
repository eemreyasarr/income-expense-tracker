export function SummaryCard({ title, amount }) {
    return (
        <div>
            <p>{title}</p>
            <h3>{amount} CHF</h3>
        </div>
    );
}