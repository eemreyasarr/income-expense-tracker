export const initialState = {
    currentCurrency: "CHF",
    transactions: [
        {
            id: "1",
            title: "Salary",
            amount: 5200,
            type: "income",
            category: "Job",
            date: "2026-05-01",
        },
        {
            id: "2",
            title: "Rent",
            amount: 1800,
            type: "expense",
            category: "Home",
            date: "2026-05-02",
        },
        {
            id: "3",
            title: "Market",
            amount: 240,
            type: "expense",
            category: "Food",
            date: "2026-05-03",
        },
    ],

    budgets: [
        {
            id: "1",
            name: "Food",
            limit: 700,
            used: 240,
        },
        {
            id: "2",
            name: "Home",
            limit: 2000,
            used: 1800,
        },
    ],

    goals: [
        {
            id: "1",
            title: "New Laptop",
            target: 2500,
            saved: 900,
        },
    ],

    filters: {
        selectedMonth: "2026-05",
        selectedType: "all",
    },
};