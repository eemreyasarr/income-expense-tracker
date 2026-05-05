import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state/AppProvider";
import { DashboardPage } from "./pages/DashboardPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { BudgetsPage } from "./pages/BudgetsPage";
import { GoalsPage } from "./pages/GoalsPage";
import './App.css';
import { PageLayout } from "./components/layout/PageLayout";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budgets" element={<BudgetsPage />} />
            <Route path="/goals" element={<GoalsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;