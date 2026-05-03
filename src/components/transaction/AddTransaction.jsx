import { useState } from "react";
import { useAppState } from "../../state/useAppState";
import { ADD_TRANSACTION } from "../../state/appActions";

export function AddTransaction() {
    const { dispatch } = useAppState();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title || !amount) return;

        const newTransaction = {
            id: Date.now().toString(),
            title,
            amount: Number(amount),
            type,
            category: "General",
            date: new Date().toISOString().split("T")[0],
        };

        dispatch({
            type: ADD_TRANSACTION,
            payload: newTransaction,
        });

        setTitle("");
        setAmount("");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Add Transaction</h3>

            <div className="form-row">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    placeholder="Amount"
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />

                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <button type="submit">Add</button>
            </div>
        </form>
    );
}