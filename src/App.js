import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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
  // return React.createElement(
    // 'div',
    // {},
    // React.createElement('h2', {}, "Lets start react"),
    // React.createElement(Expenses, {}, {items: expenses})
  // );

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log('In App.js');
  }
  return (
    <div>
      <h2>Lets Get started</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
