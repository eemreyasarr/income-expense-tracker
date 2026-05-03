import {
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    ADD_BUDGET,
    ADD_GOAL,
    SET_MONTH,
    SET_TYPE,
    SET_CATEGORY,
    RESET_APP
} from "./appActions";

export function appReducer(state, action) {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };

        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    item => item.id !== action.payload
                ),
            };

        case ADD_BUDGET:
            return {
                ...state,
                budgets: [...state.budgets, action.payload],
            };

        case ADD_GOAL:
            return {
                ...state,
                goals: [...state.goals, action.payload],
            };

        case SET_MONTH:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    selectedMonth: action.payload,
                },
            };

        case SET_TYPE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    selectedType: action.payload,
                },
            };

        case SET_CATEGORY:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    selectedCategory: action.payload,
                },
            };

        case RESET_APP:
            return {
                ...state,
                transactions: [],
                budgets: [],
                goals: [],
            };

        default:
            return state;
    }
}