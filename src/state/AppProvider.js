import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import { initialState } from "./initialState";

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}