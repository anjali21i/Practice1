import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.33,
    date: new Date(2020, 8, 14),
  },
  {
    id: "e2",
    title: "TV",
    amount: 934.33,
    date: new Date(2021, 2, 24),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.33,
    date: new Date(2021, 3, 21),
  }
];

const App =()=> {
  const [expenses, setExpenses]= useState(Dummy_expenses);
  // return React.createElement(
    // 'div',
    // {},
    // React.createElement('h2', {}, "Lets start react"),
    // React.createElement(Expenses, {}, {items: expenses})
  // );

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  };
  return (
    <div className="main-container">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
