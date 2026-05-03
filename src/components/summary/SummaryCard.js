export function SummaryCard({ title, amount, type }) {
    return (
        <div className={`card summary-card ${type}`}>
            <p className="muted">{title}</p>
            <h3 className="money">{amount} CHF</h3>
        </div>
    );
}