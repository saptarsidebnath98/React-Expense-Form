import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./styles.css";
import { initialExps } from "./utils/expenses";

export default function App() {
  const [expenses, setExpenses] = useState(initialExps);
  return (
    <div className="App">
      <h3>Track your expanses</h3>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseTable expenses={expenses} />
    </div>
  );
}
