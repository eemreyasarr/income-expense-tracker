import { useEffect, useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import { initialState } from "./initialState";

function getSavedState() {
    // const savedState = localStorage.getItem("income-expense-state");

    // if (savedState) {
    //     return JSON.parse(savedState);
    // }

    return initialState;
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState, getSavedState);

    useEffect(() => {
        localStorage.setItem(
            "income-expense-state",
            JSON.stringify(state)
        );
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}