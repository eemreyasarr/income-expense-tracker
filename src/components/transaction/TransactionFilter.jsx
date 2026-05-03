import { useAppState } from "../../state/useAppState";
import { SET_TYPE } from "../../state/appActions";

export function TransactionFilter() {
    const { state, dispatch } = useAppState();

    function handleChange(e) {
        dispatch({
            type: SET_TYPE,
            payload: e.target.value,
        });
    }

    return (
        <select
            className="filter-select"
            value={state.filters.selectedType}
            onChange={handleChange}
        >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
    );
}