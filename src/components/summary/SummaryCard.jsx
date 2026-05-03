export function SummaryCard({ title, amount, type, currency }) {
    return (
        <div className={`card summary-card ${type}`}>
            <p className="muted">{title}</p>
            <h3 className="money">{amount} {currency}</h3>
        </div>
    );
}