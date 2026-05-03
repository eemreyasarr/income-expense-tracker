import { useState } from "react";
import { useAppState } from "../../state/useAppState";
import { ADD_TRANSACTION } from "../../state/appActions";

export function AddTransaction() {
    const { state, dispatch } = useAppState();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("Food");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim()) {
            setError("Please enter a title.");
            return;
        }

        if (!amount || Number(amount) <= 0) {
            setError("Please enter a valid amount.");
            return;
        }

        const newTransaction = {
            id: Date.now().toString(),
            title: title.trim(),
            amount: Number(amount),
            type,
            category,
            date: new Date().toISOString().split("T")[0],
        };

        dispatch({
            type: ADD_TRANSACTION,
            payload: newTransaction,
        });

        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("Food");
        setError("");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Add Transaction</h3>

            {error && <p className="form-error">{error}</p>}

            <div className="form-row">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    placeholder={`Amount (${state.currentCurrency})`}
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />

                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="Food">Food</option>
                    <option value="Home">Home</option>
                    <option value="Job">Job</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="General">General</option>
                </select>

                <button type="submit">Add</button>
            </div>
        </form>
    );
}