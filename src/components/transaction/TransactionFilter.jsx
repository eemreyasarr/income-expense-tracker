import { useAppState } from "../../state/useAppState";
import { SET_TYPE, SET_CATEGORY } from "../../state/appActions";

export function TransactionFilter() {
    const { state, dispatch } = useAppState();

    function handleTypeChange(e) {
        dispatch({
            type: SET_TYPE,
            payload: e.target.value,
        });
    }

    function handleCategoryChange(e) {
        dispatch({
            type: SET_CATEGORY,
            payload: e.target.value,
        });
    }

    return (
        <div className="filter-row">
            <select
                className="filter-select"
                value={state.filters.selectedType}
                onChange={handleTypeChange}
            >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <select
                className="filter-select"
                value={state.filters.selectedCategory}
                onChange={handleCategoryChange}
            >
                <option value="all">All Categories</option>
                <option value="Food">Food</option>
                <option value="Home">Home</option>
                <option value="Job">Job</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="General">General</option>
            </select>
        </div>
    );
}